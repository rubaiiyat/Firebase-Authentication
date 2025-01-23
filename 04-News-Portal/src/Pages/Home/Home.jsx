import React, { useEffect, useState } from "react";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import BreakingNews from "../BreakingNews/BreakingNews";
import News from "../News/News";

const Home = () => {
  const [newses, setNews] = useState([]);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>

      <div className="grid grid-col-1 md:grid-cols-4 mt-5">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="grid col-span-1 md:col-span-2 ">
          <h1 className="text-2xl text-white font-bold">Latest News</h1>
          {newses.map((news) => (
            <News key={news._id} news={news}></News>
          ))}
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
