import React from "react";
import "./Banner.scss";

import Image from "../../assets/images/image.jpg";
import {
  Play,
  Instagram,
  Twitter,
  Facebook,
  ArrowLeft,
  ArrowRight,
} from "../../svg/Svgs";

const sizes = [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5];
const colors = ["#B6A179", "#272425", "#6389CB", "#F2C758", "#ffffff"];

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="left-section">
          <p className="title"> Men's shoe</p>
          <p className="name">Nike Air Edge 270</p>
          <p className="description">
            The Nike Air Edge 270 takes the look of retro basketball and puts it
            through a modern lens.
          </p>
          <div className="row">
            <div className="play-button">
              <Play size="12px" color="#7e7e7e" />
            </div>
            <p className="title">play video</p>
          </div>
          <div className="scroll-down-container">
            <p className="scroll-text">Scroll down</p>
          </div>
        </div>
        <div className="image-container">
          <img src={Image} className="image" alt="nike air edge" />
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
          <div className="icons">
            <div>
              <div className="icon" style={{ marginLeft: 3 }}>
                <Instagram size="15px" color="#000" />
              </div>
              <div className="icon">
                <Twitter size="20px" color="#000" />
              </div>
              <div className="icon">
                <Facebook size="20px" color="#000" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-tab">
        <div className="buttons">
          <div className="prev">
            <p className="title">Prev</p>
            <ArrowLeft size="15px" color="#000" />
          </div>
          <div>
            <p className="title">Next</p>
            <ArrowRight size="15px" color="#000" />
          </div>
        </div>
        <p className="title">Add to cart - $95.97</p>
      </div>
    </div>
  );
};

export default Banner;
