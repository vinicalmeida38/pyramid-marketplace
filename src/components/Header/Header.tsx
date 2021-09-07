import React from "react";
import { ShoppingCart } from "react-feather";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../../assets/constants";
import Logo from "../../assets/images/pyramid_logo.png";
import Categories from "../Categories/Categories";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-pyramid">
        <div>
          <Link to="/">
            <img src={Logo} alt="Pyramid Marketplace logo" />
          </Link>
        </div>
        <SearchBar />
        <div>
          <Link to="/shopping-cart">
            <ShoppingCart color="white" />
          </Link>
        </div>
      </div>
      <Categories categories={CATEGORIES} />
    </header>
  );
};

export default Header;
