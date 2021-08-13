import React from "react";
import "./Home.css";

import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";

import productMocks from "../../assets/mocks/products.json";

const Home = () => {
  return (
    <>
      <Header />
      <div className="product-grid">
        {productMocks.map((mock) => {
          return (
            <Product
              key={mock.id}
              id={mock.id}
              name={mock.name}
              image={mock.image}
              price={mock.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
