import React from "react";
import QuantityInput from "../QuantityInput/QuantityInput";
import "./ProductCart.css";

interface IProductCart {
  image: string;
  name: string;
  price: string;
}

const ProductCart = ({ image, name, price }: IProductCart) => {
  return (
    <div>
      <div className="product-cart">
        <div>
          <img src={image} alt="Product" width="130px" />
        </div>
        <div>
          <p className="product-cart__name">{name}</p>
        </div>
        <div>
          <QuantityInput />
        </div>
        <div>
          <p className="product-cart__price">R${price}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProductCart;
