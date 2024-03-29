import React from "react";

import { SidebarItem } from "@/core/interface/sidebar.items";
import { routes } from "./routes";
import Image from "next/image";

export const sidebarItems: SidebarItem[] = [
  {
    key: "1",
    link: routes.admin.dashboard,
    label: "Dashboard",
    inactiveIcon: (
      <Image
        src={"/icons/menu-icons/inactive/dashboard.svg"}
        width={24}
        height={24}
        alt={""}
      />
    ),
    activeIcon: (
      <Image
        src={"/icons/menu-icons/active/dashboard.svg"}
        width={24}
        height={24}
        alt={""}
      />
    ),
  },
  {
    key: "2",
    link: routes.admin.books,
    label: "Books",
    inactiveIcon: (
      <Image
        src={"/icons/menu-icons/inactive/bhagavab.svg"}
        width={24}
        height={24}
        alt={""}
      />
    ),
    activeIcon: (
      <Image
        src={"/icons/menu-icons/active/bhagavab-active.svg"}
        width={24}
        height={24}
        alt={""}
      />
    ),
  },

  {
    key: "3",
    link: routes.admin.users,
    label: "Users",
    inactiveIcon: (
      <Image
        src={"/icons/menu-icons/inactive/feedback.svg"}
        width={24}
        height={24}
        alt={""}
      />
    ),
    activeIcon: (
      <Image
        src={"/icons/menu-icons/active/feedback.svg"}
        width={24}
        height={24}
        alt={""}
      />
    ),
  },
];
