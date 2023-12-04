"use client";
import React from "react";

import SidebarItem from "./SidebarItem";
import useRoutes from "@/hooks/useRoutes";

const Sidebar = () => {
  const items = useRoutes();
  return (
    <div className="hidden lg:flex h-[90vh] fixed top-[70px]">
      <ul className="bg-gray-200 border-r border-gray-300 pt-5 flex flex-col gap-1 w-[200px] h-full">
        {items.map((item) => (
          <li key={item.id} className="">
            <SidebarItem
              label={item.label}
              icon={item.icon}
              href={item.href}
              active={item.active}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
