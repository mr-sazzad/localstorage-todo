import Navbar from "@/components/Navbar";
import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import MobileFooter from "@/components/sidebar/MobileFooter";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <Sidebar />
        <MobileFooter />
        <div className="lg:ml-[200px] p-5">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
