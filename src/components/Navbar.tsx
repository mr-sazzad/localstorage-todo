"use client";

import React from "react";
import Logo from "./Logo";
import GoTo from "./GoTo";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="h-[70px] border-b border-gray-100 shadow sticky top-0 lg:px-[50px] px-[20px] z-[1000] bg-gray-100/40 backdrop-blur inset-0">
      <div className="max-w-7xl mx-auto flex justify-between h-full items-center">
        <Logo />
        {pathname === "/" ? (
          <GoTo text="Go to dashboard" href="/dashboard" />
        ) : (
          <GoTo text="Go to home" href="/" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
