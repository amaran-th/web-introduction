import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <div className=" flex h-[100vh] bg-red-300">
      <div className="border">{children}</div>
    </div>
  );
};

export default MainLayout;
