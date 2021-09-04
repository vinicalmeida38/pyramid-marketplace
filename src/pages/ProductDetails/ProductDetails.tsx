import React, { useEffect } from "react";
import "./ProductDetails.css";

import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { useState } from "react";

interface IProducts {
  id: string;
  name: string;
  image: string;
  price: string;
}

const ProductDetails = () => {
  const [product, setProduct] = useState<IProducts>();

  useEffect(() => {
    const productId = window.location.pathname.replace("/product-details/", "");
    fetch(`/api/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json.product));
  }, []);

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
      );
    </div>
  );
};

export default ProductDetails;
