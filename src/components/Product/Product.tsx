import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

interface IProduct {
  id: string;
  image: string;
  name: string;
  price: string;
}

const Product = ({ id, image, name, price }: IProduct) => {
  return (
    <>
      <Link to={`/product-details/${id}`}>
        <div className="product-container">
          <div>
            <img className="product-image" src={image} alt="Product" />
          </div>
          <div className="product-details">
            <p className="product-details__name">{name}</p>
            <p className="product-details__price">{price}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
