"use client";
import React from "react";

export interface UserType {
  id?: number;
  isActive?: boolean;
  fullName: string;
  email: string;
  role?: string;
  avatar: string;
}
export interface UserDataType {
  token: string | null | undefined;
  user?: UserType | undefined;
}
export interface CurrentUserDataType {
  userData: UserDataType | undefined;
  setData: ({ token, user }: UserDataType) => void;
}
const AuthStateContext = {
  userData: {
    token: "",
    user: { fullName: "", avatar: "", email: "" },
  },
  setData: () => {},
};

const AuthContext = React.createContext<CurrentUserDataType>(AuthStateContext);
export default AuthContext;
