import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { VscHome, VscBook } from "react-icons/vsc";
import { BiCameraMovie } from "react-icons/bi";

import Home from "../../pages/Home/Home";
import Movie from "../../pages/Movie/Movie";
import GuestBook from "../../pages/GuestBook/GuestBook";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

const navigation = [
  { id: 0, name: "홈", icon: <VscHome />, content: <Home /> },
  { id: 1, name: "영화 소개", icon: <BiCameraMovie />, content: <Movie /> },
  { id: 2, name: "방명록", icon: <VscBook />, content: <GuestBook /> },
];

const MainLayout = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {}, [navigation]);

  return (
    <>
      <div className="min-h-[100vh] flex-1 flex-col bg-gray">
        <div className="flex min-h-[80vh] grow justify-center space-x-2 bg-mainBlack py-[30px] text-white ">
          <nav className="min-w-[150px] space-y-1" aria-label="Sidebar">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setCurrent(item.id);
                }}
                className={
                  (item.id == current
                    ? " text-gray-900 bg-darkGray"
                    : " text-gray-600 hover:text-gray-900 hover:bg-darkGray") +
                  " flex w-full items-center rounded-md px-3 py-2 text-sm font-medium"
                }
                aria-current={item.current ? "page" : undefined}
              >
                <span className="flex w-full items-center justify-between truncate">
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </span>
              </button>
            ))}
          </nav>
          <div className="w-full max-w-3xl rounded-md bg-subBlack shadow-xl">
            {navigation[current].content}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
