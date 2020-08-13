import React from "react";
import "./Banner.scss";

import Image from "../../assets/images/image.jpg";

const sizes = [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5];
const colors = ["#B6A179", "#272425", "#6389CB", "#F2C758", "#ffffff"];

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="left-section"></div>
        <div className="image-container">
          <img src={Image} className="image" />
        </div>
        <div className="right-section">
          <p className="title">Select size (us)</p>
          <div className="sizes">
            {sizes.slice(0, sizes.length / 2).map((size) => (
              <div className="size">
                <p>{size}</p>
              </div>
            ))}
          </div>
          <div className="sizes">
            {sizes.slice(sizes.length / 2, sizes.length).map((size) => (
              <div className="size">
                <p>{size}</p>
              </div>
            ))}
          </div>
          <p className="title">Select color</p>
          <div className="colors">
            {colors.map((color) => (
              <div className="color" style={{ backgroundColor: color }} />
            ))}
          </div>
        </div>
      </div>
      <div className="bottom-tab"></div>
    </div>
  );
};

export default Banner;
