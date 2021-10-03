import axios from "axios";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import ProductDetails from "./ProductDetails";

jest.mock("axios");
jest.mock("react-router-dom", () => ({
  useLocation: () => ({
    state: "foo",
  }),
  Link: jest.fn(),
}));

describe("Product Details Page", () => {
  let wrapper: ShallowWrapper;
  let useEffect: jest.SpyInstance;
  let useState: jest.SpyInstance;

  const mockUseEffect = () => {
    useEffect = jest.spyOn(React, "useEffect");
    useEffect.mockImplementation((fn: Function) => fn());
  };

  const mockUseState = (param: any) => {
    useState = jest.spyOn(React, "useState");
    useState.mockImplementation(() => [param, jest.fn()]);
  };

  const productMock = {
    id: "foo",
    image: "foo",
    description: "foo",
    name: "foo",
    price: "foo",
  };

  beforeEach(() => {
    mockUseState(productMock);
    wrapper = shallow(<ProductDetails />);
  });

  it("should contains a Header", () => {
    expect(wrapper.find(Header).length).toBe(1);
  });

  it("should contains a product image", () => {
    expect(wrapper.find("img").length).toBe(1);
    expect(wrapper.find("img").props().width).toEqual("375px");
  });

  it("should contains the product details", () => {
    axios.get = jest.fn().mockResolvedValue({ data: { product: productMock } });
    mockUseEffect();
    wrapper = shallow(<ProductDetails />);
    expect(wrapper.find('[data-test="product-name"]').length).toBe(1);
    expect(wrapper.find('[data-test="product-description-title"]').length).toBe(
      1
    );
    expect(wrapper.find('[data-test="product-description"]').length).toBe(1);
  });

  it("should contains a Link to address page", () => {
    expect(wrapper.find(Link).at(0).props().to).toEqual("/address");
  });

  it("should contains a Link to shopping cart page", () => {
    expect(wrapper.find(Link).at(1).props().to).toEqual("/shopping-cart");
  });

  it("should contains a button to buy the product", () => {
    expect(wrapper.find("button").at(0).text()).toEqual("Comprar");
  });

  it("should contains a button to add to the shopping cart", () => {
    expect(wrapper.find("button").at(1).text()).toEqual(
      "Adicionar ao carrinho"
    );
  });

  it("should be possible to click to buy the product", () => {
    wrapper.find(Link).at(0).simulate("click");
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith("/api/shopping-cart", {
      id: "foo",
      image: "foo",
      name: "foo",
      price: "foo",
    });
  });

  it("should be possible to click to add a product in the shopping cart", () => {
    wrapper.find(Link).at(1).simulate("click");
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith("/api/shopping-cart", {
      id: "foo",
      image: "foo",
      name: "foo",
      price: "foo",
    });
  });
});
