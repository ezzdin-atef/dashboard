import React from "react";
import { useRoutes } from "react-router-dom";
import { Login } from "../pages";

export default function Routes() {
  const element = useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return element;
}
