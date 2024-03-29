"use client";

import React from "react";

import { ChildrenType } from "../interface/children.base";
import { ToastContextComponent } from "../lib/toast/ToastProvider";
import AppWrapper from "@/context/store";
import StoreProvider from "@/store/provider";

export default function ProvidersWrapper({ children }: ChildrenType) {
  return (
    <AppWrapper>
      <ToastContextComponent>
        <StoreProvider>{children}</StoreProvider>
      </ToastContextComponent>
    </AppWrapper>
  );
}
