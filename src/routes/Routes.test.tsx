import { shallow, ShallowWrapper } from "enzyme";
import { Route, BrowserRouter } from "react-router-dom";
import Address from "../pages/Address/Address";
import Cart from "../pages/Cart/Cart";
import Home from "../pages/Home/Home";
import Payment from "../pages/Payment/Payment";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import SearchResult from "../pages/SearchResult/SearchResult";
import Success from "../pages/Success/Success";
import Routes from "./Routes";

describe("Routes", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Routes />);
  });

  const routes = [
    { path: "/", component: Home },
    { path: "/product-details/:id", component: ProductDetails },
    { path: "/shopping-cart", component: Cart },
    { path: "/address", component: Address },
    { path: "/payment", component: Payment },
    { path: "/success", component: Success },
    { path: "/search:q", component: SearchResult },
  ];

  it("should contain a BrowserRouter", () => {
    expect(wrapper.find(BrowserRouter).length).toBe(1);
  });

  it("should contain 7 Routes", () => {
    expect(wrapper.find(Route).length).toBe(7);
  });

  it("should contain the correct Route components", () => {
    routes.forEach((route, index) => {
      expect(wrapper.find(Route).at(index).props().component).toEqual(
        route.component
      );
    });
  });

  it("should contain the correct Route paths", () => {
    routes.forEach((route, index) => {
      expect(wrapper.find(Route).at(index).props().path).toEqual(route.path);
    });
  });
});
