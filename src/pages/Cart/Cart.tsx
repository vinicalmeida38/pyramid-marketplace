import React from "react";
import Header from "../../components/Header/Header";
import ProductCart from "../../components/ProductCart/ProductCart";
import "./Cart.css";

const Cart = () => {
  return (
    <>
      <Header />

      <div className="shopping-cart__container">
        <h1 className="title-pyramid">Carrinho de compras</h1>
        <hr />
        <ProductCart
          image="https://m.media-amazon.com/images/I/51p1FOjU-lL._AC_SX522_.jpg"
          name="Mouse multilaser"
          price="32,90"
        />
        <div className="shopping-cart__btn">
          <button className="button-pyramid">Comprar</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
