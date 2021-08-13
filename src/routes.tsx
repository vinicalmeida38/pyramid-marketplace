import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={ProductDetails} path="/product-details/:id" />
    </BrowserRouter>
  );
};
export default Routes;
