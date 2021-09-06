import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import ProductCart from "../../components/ProductCart/ProductCart";
import "./Cart.css";
import { IProductCart } from "../../components/ProductCart/ProductCart.d";

const Cart = () => {
  const [cart, setCart] = useState<IProductCart[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    axios.get("/api/shopping-cart").then((res) => {
      setCart(res.data.shoppingCarts);
      setIsLoading(false);
    });
  }, []);

  const cartHasItems = cart.length > 0 ? true : false;

  const emptyCart = () => {
    if (isLoading === false) {
      return (
        <div>
          <p className="shopping-cart__empty-cart">
            Carrinho de compras vazio.
          </p>
          <hr />
        </div>
      );
    }
  };

  const handleCart = () => {
    return history.push({ pathname: "/address" });
  };

  return (
    <>
      <Header />
      <div className="shopping-cart__container">
        <h1 className="title-pyramid">Carrinho de compras</h1>
        <hr />
        {cart.length > 0
          ? cart.map((product) => {
              return (
                <ProductCart
                  key={product.id}
                  products={{
                    productId: product.products.productId,
                    image: product.products.image,
                    price: product.products.price,
                    name: product.products.name,
                  }}
                />
              );
            })
          : emptyCart()}
        <div className="step-button">
          <button
            className={
              cartHasItems
                ? "button-pyramid"
                : "button-pyramid disabled-button-pyramid"
            }
            onClick={() => handleCart()}
          >
            Comprar
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
