"use client";
import React from "react";

import SidebarItem from "./SidebarItem";
import useRoutes from "@/hooks/useRoutes";

const Sidebar = () => {
  const items = useRoutes();
  return (
    <div className="hidden lg:flex h-[90vh] fixed top-[70px]">
      <ul className="border border-gray-300 pt-5 flex flex-col gap-1 w-[200px] h-full shadow">
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
