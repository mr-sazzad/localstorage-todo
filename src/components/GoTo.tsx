"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { BsArrowRightShort } from "react-icons/bs";

const GoTo = ({ href, text }: { href: string; text: string }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`
          flex 
          items-center 
          gap-1 
          group 
          border 
          border-gray-500 
          px-3 py-1 
          rounded-full 
          
           
          hover:text-white
          transition-all
          duration-300
          ${
            pathname === "/"
              ? "hover:bg-[#19C7AE] hover:border-[#19C7AE]"
              : "hover:bg-green-400 hover:border-green-400"
          }
        `}
    >
      <p>{text}</p>
      <BsArrowRightShort
        className="
          group-hover:translate-x-1 
          transition-all 
          duration-300 
          text-lg 
          group-hover:text-white
          text-[#1F2937]
        "
      />
    </Link>
  );
};

export default GoTo;
