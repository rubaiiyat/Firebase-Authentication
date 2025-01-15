import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <ul className="flex gap-10 justify-center items-center text-white  bg-base-300 p-7 text-xl">
        <li>
          {" "}
          <NavLink to={"/"}>Home</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to={"/signup"}>Sign up</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to={"/signin"}>Sign in</NavLink>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Header;
