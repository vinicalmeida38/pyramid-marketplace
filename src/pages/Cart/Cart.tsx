import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import ProductCart from "../../components/ProductCart/ProductCart";
import "./Cart.css";
import { IProductCart } from "../../components/ProductCart/ProductCart.d";

const Cart = () => {
  const [cart, setCart] = useState<IProductCart[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const history = useHistory();

  useEffect(() => {
    console.log('bla')
    axios.get("/api/shopping-cart").then((res) => {
      setCart(res.data.shoppingCarts);
      setIsLoading(false);
    });
    console.log('bla')
  }, []);

  const cartHasItems = cart.length > 0 ? true : false;
  console.log(cart, 'CART');
  console.log(isLoading, 'ISLOADING');
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
                  productDetails={{
                    productId: product.productDetails.productId,
                    image: product.productDetails.image,
                    price: product.productDetails.price,
                    name: product.productDetails.name,
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
