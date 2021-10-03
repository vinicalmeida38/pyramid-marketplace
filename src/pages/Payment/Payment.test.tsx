import axios from "axios";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import SimpleHeader from "../../components/Header/SimpleHeader";
import Payment from "./Payment";

jest.mock("axios");
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
  useLocation: () => ({
    state: {},
  }),
}));

describe("Payment Page", () => {
  let wrapper: ShallowWrapper;
  let useEffect: jest.SpyInstance;
  const mockAttributes = { target: { value: "foo" } };
  console.error = jest.fn();

  const mockUseEffect = () => {
    useEffect = jest.spyOn(React, "useEffect");
    useEffect.mockImplementation((fn: Function) => fn());
  };

  beforeEach(() => {
    wrapper = shallow(<Payment />);
  });

  it("should contains a SimpleHeader component", () => {
    expect(wrapper.find(SimpleHeader).length).toBe(1);
  });

  it("should contains a title", () => {
    expect(wrapper.find("h1").length).toBe(1);
  });

  it("should contains 3 payment methods", () => {
    expect(wrapper.find("input").length).toBe(3);
  });

  it("should be possible to select all payment methods", () => {
    wrapper.find("input").at(0).simulate("change", mockAttributes);
    wrapper.find("input").at(1).simulate("change", mockAttributes);
    wrapper.find("input").at(2).simulate("change", mockAttributes);
  });

  it("should contains a button disabled when all input was empty", () => {
    expect(
      wrapper.find("button").hasClass("button-pyramid disabled-button-pyramid")
    ).toEqual(true);
  });

  it("should contains a button enabled when a input was filled", () => {
    wrapper.find("input").at(0).simulate("change", mockAttributes);
    expect(wrapper.find("button").hasClass("button-pyramid")).toEqual(true);
  });

  it("should be possible to submit the payment form", () => {
    axios.post = jest.fn().mockResolvedValue({});
    wrapper.find("form").simulate("submit", { preventDefault: jest.fn() });
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith("/api/checkout", {
      address: {},
      cart: {},
      payment: "",
    });
  });

  it("should handle the submit of the payment form with an error", () => {
    axios.post = jest.fn().mockRejectedValue({});
    wrapper.find("form").simulate("submit", { preventDefault: jest.fn() });
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith("/api/checkout", {
      address: {},
      cart: {},
      payment: "",
    });
  });

  it("should gets the cart products", () => {
    axios.get = jest.fn().mockResolvedValue({
      data: { shoppingCarts: {} },
    });
    mockUseEffect();
    shallow(<Payment />);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/api/shopping-cart");
  });

  it("should gets the cart products with an error", () => {
    axios.get = jest.fn().mockRejectedValue({});
    mockUseEffect();
    shallow(<Payment />);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/api/shopping-cart");
  });
});
