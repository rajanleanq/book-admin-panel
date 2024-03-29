import { createApi } from "@reduxjs/toolkit/query/react";
import { protectedBaseQuery } from "@/store/baseQuery/protected.baseQuery";
import { LoginFormInterface } from "./auth.interface";
import { endpoints } from "@/constants/endpoints";

export const authAPI: any = createApi({
  baseQuery: protectedBaseQuery,
  reducerPath: "authApi",
  tagTypes: ["auth"],
  endpoints: (build) => ({
    login: build.mutation({
      query: (signInData: LoginFormInterface) => ({
        url: endpoints.auth.login,
        body: signInData,
        method: "POST",
      }),
      invalidatesTags: ["auth"],
    }),

    logout: build.mutation({
      query: () => ({
        url: endpoints.auth.logout,
        method: "POST",
      }),
    }),
    getToken: build.query({
      query: () => ({
        url: endpoints.auth.authSuccess,
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useGetTokenQuery } =
  authAPI;
