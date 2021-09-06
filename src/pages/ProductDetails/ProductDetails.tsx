import React, { useEffect } from "react";
import axios from "axios";
import "./ProductDetails.css";

import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IProductDetails } from "./ProductDetails.d";
import { v4 as uuidv4 } from "uuid";

const ProductDetails = () => {
  const [product, setProduct] = useState<IProductDetails>();

  useEffect(() => {
    const productId = window.location.pathname.replace("/product-details/", "");
    axios
      .get(`/api/products/${productId}`)
      .then((res) => setProduct(res.data.product));
  }, []);

  const handleShoppingCart = () => {
    axios.post("/api/shopping-cart", {
      id: uuidv4(),
      products: {
        id: product?.id,
        image: product?.image,
        name: product?.name,
        price: product?.price,
      },
    });
  };

  return (
    <div className="product-details__background">
      <Header />
      <div className="product-details__container">
        <div className="product-details__img">
          <img src={product?.image} alt="Product" width="375px" />
        </div>
        <div className="product-details__detail">
          <h2>{product?.name}</h2>
          <h3>Descrição do produto</h3>
          <p>{product?.description}</p>
        </div>
        <div className="product-details__btns">
          <Link to="/address" onClick={() => handleShoppingCart()}>
            <button className="button-pyramid product-details__btns--buy">
              Comprar
            </button>
          </Link>
          <Link to="/shopping-cart" onClick={() => handleShoppingCart()}>
            <button className="button-pyramid product-details__btns--cart">
              Adicionar ao carrinho
            </button>
          </Link>
        </div>
      </div>
      );
    </div>
  );
};

export default ProductDetails;
