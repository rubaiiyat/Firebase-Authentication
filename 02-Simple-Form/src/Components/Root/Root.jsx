import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="text-center ">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
