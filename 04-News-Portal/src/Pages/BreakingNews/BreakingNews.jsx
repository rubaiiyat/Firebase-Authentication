import React from "react";
import Marquee from "react-fast-marquee";
const BreakingNews = () => {
  return (
    <div className="flex items-center">
      <button className="btn  btn-secondary text-white text-lg">Latest</button>
      <Marquee className="text-lg bg-base-200 p-3">
        <p className="text-accent mx-5 ">
          I can be a React component, multiple React components, or just some
          text.
        </p>
        <p className="text-primary mx-5">
          I can be a React component, multiple React components, or just some
          text.
        </p>
        <p className="text-info mx-5">
          I can be a React component, multiple React components, or just some
          text.
        </p>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
