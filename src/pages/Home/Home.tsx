import React from "react";
import "./Home.css";

import { IProduct } from "../../components/Product/Product.d";

import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="product-grid">
        {products.map((product: IProduct) => {
          return (
            <Product
              key={`${product.id}-${product.name}`}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
