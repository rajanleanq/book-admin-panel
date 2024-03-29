"use client";
import React, { useEffect, useState } from "react";
import AuthContext, { CurrentUserDataType, UserDataType } from "./authContext";
import { getCookie } from "cookies-next";
import { session } from "@/constants/token";

type Props = { children: React.ReactNode };

const AuthProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState<UserDataType | undefined>(undefined);

  const cookieUserData: string | undefined | null = getCookie(
    session.user
  )?.toString();
  const cookieTokenData: string | undefined | null = getCookie(
    session.token
  )?.toString();

  useEffect(() => {
    if (cookieUserData && cookieTokenData) {
      setUserData({
        token: cookieTokenData,
        user: JSON.parse(cookieUserData),
      });
    }
  }, [cookieTokenData, cookieUserData]);

  const setData = ({ token, user }: UserDataType) => {
    setUserData({
      token: token,
      user: user,
    });
  };

  const AuthValue: CurrentUserDataType = {
    userData: userData,
    setData: setData,
  };

  return (
    <AuthContext.Provider value={AuthValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
