import React, { useEffect } from "react";
import { VscHome, VscBook } from "react-icons/vsc";
import { BiCameraMovie } from "react-icons/bi";

import Home from "../../../pages/Home/Home";
import Movie from "../../../pages/Movie/Movie";
import GuestBook from "../../../pages/GuestBook/GuestBook";

const navigation = [
  { id: 0, name: "홈", icon: <VscHome />, content: <Home /> },
  { id: 1, name: "영화 소개", icon: <BiCameraMovie />, content: <Movie /> },
  { id: 2, name: "방명록", icon: <VscBook />, content: <GuestBook /> },
];

const SideBar = ({ current, setCurrent, setCurrentPage }) => {
  useEffect(() => {
    setCurrentPage(<Home />);
  }, []);
  return (
    <nav className="min-w-[150px] space-y-1" aria-label="Sidebar">
      {navigation.map((item) => (
        <button
          key={item.name}
          onClick={() => {
            setCurrent(item.id);
            setCurrentPage(item.content);
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
  );
};

export default SideBar;
