import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="mx-auto mt-5">
      <img className="mx-auto mb-1" src={logo} alt="" />
      <h1 className="text-center text-lg text-white">
        Journalism Without Fear or Favour
      </h1>
      <h1 className="text-center text-lg text-white mb-5">
        {" "}
        {moment().format("dddd, MMMM Do YYYY")}
      </h1>
    </div>
  );
};

export default Header;
