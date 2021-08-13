import React from "react";
import "./Product.css";

interface IProduct {
  image: string;
  name: string;
  price: string;
}

const Product = ({ image, name, price }: IProduct) => {
  return (
    <div className="product-container">
      <div>
        <img className="product-image" src={image} alt="Product" />
      </div>
      <div className="product-details">
        <p className="product-details__name">{name}</p>
        <p className="product-details__price">R${price}</p>
      </div>
    </div>
  );
};

export default Product;
