"use client";
import React, { HtmlHTMLAttributes } from "react";

import { Input, Select } from "antd";
import Image from "next/image";

interface Props extends HtmlHTMLAttributes<HTMLInputElement> {
  name?: string;
  loading?: boolean;
  disabled?: boolean;
  type?: string;
}

export const FormTextInput = ({
  placeholder,
  defaultValue,
  onChange,
  disabled,
  name,
  id,
  type,
  onBlur,
}: Props) => {
  return (
    <Input
      placeholder={placeholder}
      value={defaultValue}
      onChange={onChange ? (e) => onChange(e) : () => {}}
      id={id}
      name={name}
      type={type || "text"}
      autoComplete={"off"}
      disabled={disabled}
      onBlur={onBlur}
      className=" text-paragraph outline-none p-2 flex items-center w-full border border-solid border-[#DDE1E6] hover:border-[#DDE1E6] active:border-[#DDE1E6] focus:border-[#DDE1E6] hover:outline-none focus:outline-none focus-within:outline-none active:outline-none"
    />
  );
};

export const FormPasswordInput = ({
  placeholder,
  defaultValue,
  onChange,
  id,
  name,
  onBlur,
}: Props) => {
  return (
    <Input.Password
      placeholder={placeholder}
      value={defaultValue}
      onChange={onChange ? (e) => onChange(e) : () => {}}
      id={id}
      onBlur={onBlur}
      name={name}
      autoComplete={"off"}
      iconRender={(visible) =>
        visible ? (
          <Image src={"/icons/eye.svg"} width={16} height={16} alt="show" />
        ) : (
          <Image
            src={"/icons/eye-closed.svg"}
            width={16}
            height={16}
            alt="hide"
          />
        )
      }
      className="text-paragraph outline-none p-2 flex items-center w-full border border-solid border-[#DDE1E6] hover:border-[#DDE1E6] active:border-[#DDE1E6] focus:border-[#DDE1E6] hover:outline-none focus:outline-none focus-within:outline-none active:outline-none"
    />
  );
};

interface InputSelectProps {
  placeholder?: string;
  defaultValue?: string | number | null;
  onChange: (e: any) => void;
  id?: string;
  options: any[];
  loading?: boolean;
}

export const FormSelectInput = ({
  placeholder,
  defaultValue,
  onChange,
  id,
  options,
  loading,
}: InputSelectProps) => {
  return (
    <Select
      showSearch
      placeholder={placeholder}
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? "").includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? "")
          .toLowerCase()
          .localeCompare((optionB?.label ?? "").toLowerCase())
      }
      options={options}
      id={id}
      onChange={onChange}
      loading={loading}
      value={defaultValue}
      className="w-full h-10"
    />
  );
};
