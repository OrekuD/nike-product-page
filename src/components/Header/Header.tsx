import React from "react";
import "./Header.scss";
import { Nike, User, ShoppingBag } from "../../svg/Svgs";

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
        <div className="icon">
          <User size="20px" color="#000000" />
        </div>
        <div className="icon">
          <ShoppingBag size="20px" color="#000000" />
        </div>
      </div>
    </header>
  );
};

export default Header;
