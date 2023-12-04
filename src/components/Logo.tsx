import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <h2 className="font-semibold sm:text-3xl text-2xl logo">Next Task</h2>
    </Link>
  );
};

export default Logo;
