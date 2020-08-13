import React from "react";
import "./Header.scss";
import { Nike } from "../../svg/Svgs";

const menuItems = ["New releases", "Men", "Women", "Kids", "Customize"];

const Header = () => {
  return (
    <header>
      <Nike size="80" />
      <div className="menu">
        {menuItems.map((name) => (
          <p>{name}</p>
        ))}
      </div>
      <div className="icons">
        <div className="icon" />
        <div className="icon" />
      </div>
    </header>
  );
};

export default Header;
