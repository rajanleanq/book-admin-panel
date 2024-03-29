import MainLayout from "@/components/layout/MainLayout";
import ProvidersWrapper from "@/core/providers/wrapper";
import React from "react";

export default function AdminProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProvidersWrapper>
      <MainLayout>
        <main className="h-full">{children}</main>
      </MainLayout>
    </ProvidersWrapper>
  );
}
