"use client";

import useRoutes from "@/hooks/useRoutes";
import React from "react";
import FooterItem from "./FooterItem";

const MobileFooter = () => {
  const routes = useRoutes();
  return (
    <div className="lg:hidden flex justify-between items-center h-[70px] w-full px-[20px] bg-gray-200 border-t border-gray-400 fixed bottom-0 right-0 left-0 z-[1000]">
      {routes.map((route) => (
        <FooterItem
          key={route.id}
          label={route.label}
          icon={route.icon}
          href={route.href}
          active={route.active}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
