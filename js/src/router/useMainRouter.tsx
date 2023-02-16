import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../pages/Home";

const useMainRouter = () =>
  useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
      ],
    },
  ]);

export default useMainRouter;
