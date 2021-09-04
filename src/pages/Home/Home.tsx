import { useEffect, useState } from "react";
import "./Home.css";

import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";

interface IProducts {
  id: string;
  name: string;
  image: string;
  price: string;
}

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((json) => setProducts(json.products));
  }, []);

  return (
    <>
      <Header />
      <div className="product-grid">
        {products.map((product: IProducts) => {
          return (
            <Product
              key={product.id}
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
