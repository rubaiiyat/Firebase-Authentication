import React, { useState } from "react";
import { FaBookmark, FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { Link } from "react-router-dom";

const News = ({ news }) => {
  const { _id, author, title, image_url, details, rating, total_view } = news;

  return (
    <div className="bg-base-200 shadow-2xl mb-10 mr-0  md:mr-10 mt-5 border border-gray-700">
      <div>
        <div className="flex items-center justify-between bg-base-300 p-5 ">
          <div className="flex gap-3 items-center">
            <img className="w-12 rounded-full" src={author.img} alt="" />
            <div>
              <h1 className="font-bold text-white">{author.name}</h1>
              <p>{author.published_date}</p>
            </div>
          </div>
          <div className="flex gap-3 text-white text-2xl">
            <FaBookmark />
            <IoMdShare />
          </div>
        </div>

        <div className="m-5 space-y-5">
          <h1 className="text-lg md:text-2xl font-bold text-white ">{title}</h1>
          <img src={image_url} alt="" />
          <p>
            {details.split(" ").length > 30
              ? `${details.split(" ").slice(0, 30).join(" ")}...`
              : `${details}`}
          </p>
          <Link className="text-info " to={`/post/${_id}`}>
            More
          </Link>

          <hr />

          <div className="flex items-center justify-between">
            <h1 className="text-white flex gap-2 items-center">
              Rating: {rating.number}{" "}
              <span className="text-yellow-400 text-lg">
                {" "}
                <FaStar />
              </span>
            </h1>
            <h1 className="text-white flex gap-2 items-center">
              <span className="text-xl text-gray-300">
                <FaEye />
              </span>{" "}
              {total_view}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
