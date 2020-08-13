import React from "react";
import "./Banner.scss";

import Image from "../../assets/images/image.jpg";

const sizes = [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5];
const colors = ["#B6A179", "#272425", "#6389CB", "#F2C758", "#ffffff"];

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="left-section">
          <p className="title">Men's shoe</p>
          <p className="name">Nike Air Edge 270</p>
          <p className="description">
            Nisi id consequat in enim pariatur sint pariatur reprehenderit eu
            eiusmod cupidatat.
          </p>
          <div className="row">
            <div className="play-button"></div>
            <p className="title">play video</p>
          </div>
          <div className="scroll-down-container">
            <p className="scroll-text">Scroll down</p>
          </div>
        </div>
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
