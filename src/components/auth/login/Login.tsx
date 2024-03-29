"use client";
import React from "react";
import Image from "next/image";
import LoginForm from "./LoginForm";
const LoginComponent = () => {
  return (
    <div className="flex w-screen">
      <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-white flex-1">
        <div className="w-full">
          <p className="text-center text-lg ">reaDRadar</p>
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your admin panel
          </h2>
        </div>
        <div className="mt-5 w-[80%] mx-auto">
          <LoginForm />
        </div>
      </div>
      <Image
        src={"/images/yoga-bg.jpg"}
        alt="loginbg-yoga"
        width={1000}
        height={1000}
        className="h-screen object-fill w-[65%]"
      />
    </div>
  );
};

export default LoginComponent;
