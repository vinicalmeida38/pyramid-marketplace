import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Address from "./pages/Address/Address";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={ProductDetails} path="/product-details/:id" />
      <Route component={Cart} path="/shopping-cart" />
      <Route component={Address} path="/address" />
    </BrowserRouter>
  );
};
export default Routes;
