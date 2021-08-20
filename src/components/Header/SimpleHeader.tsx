import React from "react";
import "./Header.css";

import Logo from "../../assets/images/pyramid_logo.png";
import { Link } from "react-router-dom";

const SimpleHeader = () => {
  return (
    <header>
      <div className="header-pyramid">
        <div>
          <Link to="/">
            <img
              className="header-pyramid__logo"
              src={Logo}
              alt="Pyramid Marketplace logo"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;
