"use client";
import { Tabs, TabsProps } from "antd";
import React from "react";

type Props = {
  items: TabsProps["items"];
};

const TabMenu = ({ items }: Props) => {
  const onChange = () => {
  };
  return (
    <div>
      <Tabs
        className="text-paragraph text-[#878D96]"
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </div>
  );
};

export default TabMenu;
