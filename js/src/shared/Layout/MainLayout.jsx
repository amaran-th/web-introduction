import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

const MainLayout = () => {
  const [current, setCurrent] = useState(0);
  const [currentPage, setCurrentPage] = useState();
  useEffect(() => {}, [current]);

  return (
    <>
      <div className="min-h-[100vh] flex-1 flex-col bg-gray">
        <div className="flex min-h-[80vh] grow justify-center space-x-2 bg-mainBlack py-[30px] text-white ">
          <SideBar
            current={current}
            setCurrent={setCurrent}
            setCurrentPage={setCurrentPage}
          />
          <div className="w-full max-w-3xl rounded-md bg-subBlack shadow-xl">
            {currentPage}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
