import React from "react";
import "./Header.css";

import { SEARCH_BAR_PLACEHOLDER } from "../../assets/constants";

import { Search, ShoppingCart } from "react-feather";
import Logo from "../../assets/images/pyramid_logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <header>
      <div className="header-pyramid">
        <div>
          <Link to="/">
            <img src={Logo} alt="Pyramid Marketplace logo" />
          </Link>
        </div>
        <div className="header-pyramid__search-container">
          <input
            className="header-pyramid__search-bar"
            type="text"
            placeholder={SEARCH_BAR_PLACEHOLDER}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="header-pyramid__search-btn">
            <Search color="#F94F35" />
          </button>
        </div>
        <div>
          <Link to="/shopping-cart">
            <ShoppingCart color="white" />
          </Link>
        </div>
      </div>
      <div className="header-categories">
        <div>
          <ul className="header-categories__menu">
            <li>Ofertas do dia</li>
            <li>Tecnologia</li>
            <li>Moda</li>
            <li>Móveis</li>
            <li>Construção</li>
            <li>Saúde</li>
            <li>Eletrodomésticos</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
