import Navbar from "@/components/Navbar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <div className="lg:ml-[200px] p-5">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
