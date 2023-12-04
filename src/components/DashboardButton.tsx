import Link from "next/link";
import React from "react";

import { GoArrowUpRight } from "react-icons/go";

const DashboardButton = ({
  text,
  color,
  href,
}: {
  text: string;
  color: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className={`w-full h-[40px] rounded-full relative bg-white flex justify-between items-center pl-3 mt-10 hover:shadow group`}
    >
      <p className="text-sm font-medium">{text}</p>
      <GoArrowUpRight
        className={`absolute right-2 p-2 text-3xl text-white font-bold rounded-full ${color} transition-all duration-200 group-hover:rotate-45`}
      />
    </Link>
  );
};

export default DashboardButton;
