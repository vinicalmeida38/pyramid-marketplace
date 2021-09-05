import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import ProductCart from "../../components/ProductCart/ProductCart";
import "./Cart.css";

interface ICart {
  image: string;
  name: string;
  price: string;
}

const Cart = () => {
  const [cart, setCart] = useState<ICart[]>([]);

  useEffect(() => {
    axios
      .get("/api/shopping-cart")
      .then((res) => setCart(res.data.shoppingCarts));
  }, []);

  const cartHasItems = cart.length > 0 ? true : false;

  return (
    <>
      <Header />
      <div className="shopping-cart__container">
        <h1 className="title-pyramid">Carrinho de compras</h1>
        <hr />
        {cartHasItems ? (
          cart.map((product, index) => {
            return (
              <ProductCart
                key={index}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            );
          })
        ) : (
          <div>
            <p className="shopping-cart__empty-cart">
              Carrinho de compras vazio.
            </p>
            <hr />
          </div>
        )}
        <div className="step-button">
          <Link
            to="/address"
            className={cartHasItems ? undefined : "disabled-link"}
          >
            <button
              className={
                cartHasItems
                  ? "button-pyramid"
                  : "button-pyramid disabled-button-pyramid"
              }
            >
              Comprar
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
