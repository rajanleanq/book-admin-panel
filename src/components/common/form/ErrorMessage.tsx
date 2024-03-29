import React from "react";

type Props = { message: string | undefined };

const ErrorMessage = ({ message }: Props) => {
  return <p className="text-red-600 p-0 font-medium text-[12px] mt-1">{message}</p>;
};

export default ErrorMessage;
