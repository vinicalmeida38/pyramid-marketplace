import React from "react";
import "./Header.css";

import { SEARCH_BAR_PLACEHOLDER } from "../../assets/constants";

import { Search, ShoppingCart } from "react-feather";
import Logo from "../../assets/images/pyramid_logo.png";

const Header = () => {
  return (
    <header>
      <div className="header-pyramid">
        <div>
          <a href="/">
            <img src={Logo} alt="Pyramid Marketplace logo" />
          </a>
        </div>
        <div className="header-pyramid__search-container">
          <input
            className="header-pyramid__search-bar"
            type="text"
            placeholder={SEARCH_BAR_PLACEHOLDER}
          />
          <button className="header-pyramid__search-btn">
            <Search color="#F94F35" />
          </button>
        </div>
        <div>
          <a href="/">
            <ShoppingCart color="white" />
          </a>
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
