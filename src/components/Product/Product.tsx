import React from "react";
import { useHistory } from "react-router-dom";
import { IProductComponent } from "./Product.d";
import "./Product.css";

const Product = ({ id, image, name, price }: IProductComponent) => {
  const history = useHistory();
  const handleProductDetails = () => {
    return history.push({ pathname: `/product-details/${id}`, state: id });
  };

  return (
    <>
      <div onClick={handleProductDetails}>
        <div className="product-container">
          <div>
            <img className="product-image" src={image} alt="Product" />
          </div>
          <div className="product-details">
            <p className="product-details__name">{name}</p>
            <p className="product-details__price">{price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
