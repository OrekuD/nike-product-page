import React from "react";
import "./Banner.scss";

import Image from "../../assets/images/image.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="left-section"></div>
        <div className="image-container">
          <img src={Image} className="image" />
        </div>
        <div className="right-section"></div>
      </div>
      <div className="bottom-tab"></div>
    </div>
  );
};

export default Banner;
