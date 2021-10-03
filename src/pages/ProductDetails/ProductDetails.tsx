import React from "react";
import axios from "axios";
import "./ProductDetails.css";
import Header from "../../components/Header/Header";
import { useLocation, Link } from "react-router-dom";
import { IProductDetails } from "../../components/Product/Product.d";

const ProductDetails = () => {
  const [product, setProduct] = React.useState<IProductDetails>();
  const location = useLocation();
  const productId = location.state;

  React.useEffect(() => {
    axios
      .get(`/api/products/${productId}`)
      .then((res) => setProduct(res.data.product));
  }, [productId]);

  const handleShoppingCart = () => {
    axios.post("/api/shopping-cart", {
      id: product?.id,
      image: product?.image,
      name: product?.name,
      price: product?.price,
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
          <h2 data-test="product-name">{product?.name}</h2>
          <h3 data-test="product-description-title">Descrição do produto</h3>
          <p data-test="product-description">{product?.description}</p>
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
    </div>
  );
};

export default ProductDetails;
