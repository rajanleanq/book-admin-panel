"use client";
import React from "react";
import { Layout } from "antd";
import SideBar from "./SideBar";
import Navbar from "./Navbar";

const { Header, Content } = Layout;

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Layout className="h-[100%] w-full">
        <SideBar />
        <Content className="pl-[270px]">
          {children}
        </Content>
      </Layout>
    </div>
  );
};

export default MainLayout;
