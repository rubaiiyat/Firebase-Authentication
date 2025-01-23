import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="mx-5 md:mx-10 lg:mx-44">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
