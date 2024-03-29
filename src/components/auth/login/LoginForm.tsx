"use client";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useToast } from "@/core/lib/toast/useToast";
import { useGetTokenQuery, useLoginMutation } from "@/store/features/auth/api";
import { PrimaryButton } from "@/components/common/button/Button";
import ErrorMessage from "@/components/common/form/ErrorMessage";
import {
  FormPasswordInput,
  FormTextInput,
} from "@/components/common/form/FormInput";
import { routes } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { session } from "@/constants/token";
const LoginForm = () => {
  const router = useRouter();
  const [loginMutation] = useLoginMutation();
  const { data: tokenData } = useGetTokenQuery();
  const navigate = useRouter();
  useEffect(() => {
    if (tokenData?.token && tokenData?.user) {
      setCookie(session.token, tokenData?.token);
      setCookie(session.user, JSON.stringify(tokenData?.user));
      navigate.replace("/books");
    }
  }, [tokenData]);
  const showToast = useToast();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      const response = await loginMutation(values);
      if (response.error?.status !== 400) {
        router.push(routes?.admin?.dashboard);
        showToast({
          type: "success",
          title: "Login Successful",
        });
        window.location.reload();
      } else {
        showToast({
          type: "error",
          title: "Invalid Credentials",
        });
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Username
        </label>
        <div className="mt-2">
          <FormTextInput
            type="text"
            name="username"
            id="username"
            defaultValue={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="eg. ram123"
          />
          {formik.touched.username && formik.errors.username ? (
            <ErrorMessage message={formik.errors.username} />
          ) : null}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
        </div>
        <div className="mt-2">
          <FormPasswordInput
            type="password"
            defaultValue={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="password"
            id="password"
            placeholder="*********"
          />
          {formik.touched.password && formik.errors.password ? (
            <ErrorMessage message={formik.errors.password} />
          ) : null}
        </div>
      </div>

      <div>
        <PrimaryButton type="submit">Sign In</PrimaryButton>
      </div>
    </form>
  );
};

export default LoginForm;
