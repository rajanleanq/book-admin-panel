import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../antd.min.css"
import "./globals.css";
import ProvidersWrapper from "@/core/providers/wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Management system for meditation, bed time story, etc.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ProvidersWrapper>
        <body className={inter.className}>{children}</body>
      </ProvidersWrapper>
    </html>
  );
}
