import React from "react";
import "./ProductCart.css";

import QuantityInput from "../QuantityInput/QuantityInput";
import { IProductCartComponent } from "./ProductCart.d";

const ProductCart = ({
  productDetails: { image, name, price },
}: IProductCartComponent) => {
  return (
    <div>
      <div className="product-cart">
        <div>
          <img src={image} alt="Product" width="130px" />
        </div>
        <div className="product-cart__name--col">
          <p className="product-cart__name">{name}</p>
        </div>
        <div className="product-cart__qty--col">
          <QuantityInput />
        </div>
        <div>
          <p className="product-cart__price">{price}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProductCart;
