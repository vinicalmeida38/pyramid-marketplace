import React from "react";
import { useLocation } from "react-router";
import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";
import { IProduct } from "../../components/Product/Product.d";

const SearchResult = () => {
  const location = useLocation();
  const products = location.state as Array<IProduct>;

  return (
    <>
      <Header />
      <div className="product-grid">
        {products.map((product: IProduct) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default SearchResult;
