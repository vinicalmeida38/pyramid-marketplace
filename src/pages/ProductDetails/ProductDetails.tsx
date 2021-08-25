import React from "react";
import "./ProductDetails.css";

import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  return (
    <div className="product-details__background">
      <Header />
      <div className="product-details__container">
        <div className="product-details__img">
          <img
            src="https://m.media-amazon.com/images/I/51p1FOjU-lL._AC_SX522_.jpg"
            alt="Product"
            width="375px"
          />
        </div>
        <div className="product-details__detail">
          <h2>Mouse multilaser</h2>
          <h3>Descrição do produto</h3>
          <p>
            Aliquam blandit suscipit justo, a imperdiet mi ultrices at.
            Curabitur tempus at magna et tempus. Donec pellentesque lorem vel
            fringilla fermentum. Quisque non rutrum elit, a hendrerit sapien.
            Proin pretium sem id tristique efficitur. Mauris elementum non nibh
            in ullamcorper.
          </p>
        </div>
        <div className="product-details__btns">
          <Link to="/payment">
            <button className="button-pyramid product-details__btns--buy">
              Comprar
            </button>
          </Link>
          <Link to="/shopping-cart">
            <button className="button-pyramid product-details__btns--cart">
              Adicionar ao carrinho
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
