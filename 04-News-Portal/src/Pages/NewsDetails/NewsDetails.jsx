import React from "react";
import Header from "../../Shared/Header/Header";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import { useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const NewsDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-col-1 md:grid-cols-4 mt-5">
        <div className="grid col-span-2 md:col-span-3 ">
          <h1>{id}</h1>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
