import axios from "axios";
import { ShallowWrapper, shallow } from "enzyme";
import { IProductCart } from "../../components/ProductCart/ProductCart.d";
import React from "react";
import ProductCart from "../../components/ProductCart/ProductCart";
import Cart from "./Cart";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("Cart Page", () => {
  let wrapper: ShallowWrapper;
  let useEffect: jest.SpyInstance;
  let useState: jest.SpyInstance;
  console.error = jest.fn();

  const mockUseEffect = () => {
    useEffect = jest.spyOn(React, "useEffect");
    useEffect.mockImplementation((fn: Function) => fn());
  };

  const mockUseState = (param: any) => {
    useState = jest.spyOn(React, "useState");
    useState.mockImplementation(() => [param, jest.fn()]);
  };

  const cartMock: IProductCart[] = [
    {
      id: 0,
      productDetails: {
        productId: "foo",
        image: "foo",
        name: "foo",
        price: "foo",
      },
    },
    {
      id: 1,
      productDetails: {
        productId: "foo",
        image: "foo",
        name: "foo",
        price: "foo",
      },
    },
  ];

  it("should contains a title", () => {
    wrapper = shallow(<Cart />);
    expect(wrapper.find("h1").length).toBe(1);
  });

  it("should get shopping cart from the service", () => {
    axios.get = jest.fn().mockResolvedValue({ data: { shoppingCarts: [] } });
    mockUseEffect();
    mockUseState(false);
    shallow(<Cart />);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/api/shopping-cart");
  });

  it("should get shopping cart from the service with an error", () => {
    axios.get = jest.fn().mockRejectedValue({});
    mockUseEffect();
    mockUseState(false);
    shallow(<Cart />);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/api/shopping-cart");
  });

  it("should contains products in the shopping cart", () => {
    mockUseState(cartMock);
    wrapper = shallow(<Cart />);
    expect(wrapper.find(ProductCart).length).toBe(2);
  });

  it("should contains an empty layout and the disabled buy button", () => {
    mockUseState(false);
    wrapper = shallow(<Cart />);
    expect(wrapper.find(".shopping-cart__empty-cart").length).toBe(1);
    expect(wrapper.find(".shopping-cart__empty-cart").text()).toEqual(
      "Carrinho de compras vazio."
    );
    expect(
      wrapper.find("button").hasClass("button-pyramid disabled-button-pyramid")
    ).toBe(true);
  });

  it("should be possible to click on the buy button", () => {
    mockUseState(cartMock);
    wrapper = shallow(<Cart />);
    wrapper.find("button").simulate("click");
  });
});
