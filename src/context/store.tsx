import React from "react";
import AuthProvider from "./auth/authProvider";

type Props = { children: React.ReactNode };

const AppWrapper = ({ children }: Props) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppWrapper;
