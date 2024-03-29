import { HtmlHTMLAttributes } from "react";

export interface ButtonProps  extends  HtmlHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  disabled?:boolean,
  type?: "button" | "submit" | "reset" | undefined,
}