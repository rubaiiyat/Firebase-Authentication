import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import swimming from "../../assets/swimming.png";
import cls from "../../assets/class.png";
import playGround from "../../assets/playground.png";
import backgroundimg from "../../assets/bg.png";
const RightSideNav = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl text-white">Login With</h1>
        <a
          className="flex gap-2 justify-center items-center border border-blue-400 text-blue-400 p-2 mt-3 rounded text-lg"
          href=""
        >
          <FcGoogle /> Login With Google
        </a>
        <a
          className="flex gap-2 justify-center items-center border  p-2 mt-3 rounded text-lg"
          href=""
        >
          <FaGithub /> Login With Github
        </a>
      </div>

      {/* Find On Us */}
      <div className="">
        <h1 className="font-bold text-2xl text-white mt-10">Find On Us</h1>
        <a
          className="flex gap-2 justify-start items-center border  p-3 mt-3 rounded-t-lg text-lg"
          href=""
        >
          <span className="bg-gray-200 p-2 rounded-full text-blue-700">
            <FaFacebookF />
          </span>
          Facebook
        </a>

        <a
          className="flex gap-2 justify-start items-center  p-3  text-lg border-l-2 border-r-2"
          href=""
        >
          <span className="bg-gray-200 p-2 rounded-full text-blue-700">
            <FaTwitter />
          </span>
          Twitter
        </a>

        <a
          className="flex gap-2 justify-start items-center border  p-3  rounded-b-lg text-lg  "
          href=""
        >
          <span className="bg-white p-2 rounded-full text-orange-800">
            <FaInstagram />
          </span>
          Facebook
        </a>
      </div>

      {/* Quick Zone */}

      <div className="bg-base-200 space-y-7  p-3 mt-10 rounded">
        <h1 className="font-bold text-2xl text-white  mb-10">Q-Zone</h1>
        <div className="text-center">
          <img className="mx-auto " src={swimming} alt="" />
          <h1 className="text-xl font-bold text-white">Swimming</h1>
        </div>

        <div className="text-center">
          <img className="mx-auto" src={cls} alt="" />
          <h1 className="text-xl font-bold text-white">Class</h1>
        </div>
        <div className="text-center">
          <img className="mx-auto" src={playGround} alt="" />
          <h1 className="text-xl font-bold text-white">Playground</h1>
        </div>
        <div className="text-center">
          <img className="mx-auto" src={backgroundimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
