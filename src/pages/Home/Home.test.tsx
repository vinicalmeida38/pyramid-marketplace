import axios from "axios";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";
import Home from "./Home";

jest.mock("axios");

describe("Home Page", () => {
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

  it("should contains a Header component", () => {
    wrapper = shallow(<Home />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  it("should gets the products from the service", () => {
    axios.get = jest.fn().mockResolvedValue({
      data: { products: [] },
    });
    mockUseEffect();
    wrapper = shallow(<Home />);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/api/products");
  });

  it("should gets the products from the service with an error", () => {
    axios.get = jest.fn().mockRejectedValue({});
    mockUseEffect();
    wrapper = shallow(<Home />);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/api/products");
  });

  it("should contains products in the home page", () => {
    const productsMock = [
      {
        id: "foo",
        image: "foo",
        name: "foo",
        price: "foo",
      },
    ];
    mockUseState(productsMock);
    wrapper = shallow(<Home />);
    expect(wrapper.find(Product).length).toBe(1);
  });
});
