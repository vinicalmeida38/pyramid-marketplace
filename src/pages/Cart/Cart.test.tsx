import Cart from "./Cart";
import React from "react";
import { ShallowWrapper, shallow } from "enzyme";
import { IProductCart } from "../../components/ProductCart/ProductCart.d";
import { useState } from "react";

describe("Cart Page", () => {
  let wrapper: ShallowWrapper;
  const cartMock: IProductCart[] = [
    {
      id: 0,
      products: {
        productId: "foo",
        image: "foo",
        name: "foo",
        price: "foo",
      },
    },
  ];

  beforeEach(() => {
    wrapper = shallow(<Cart />);
  });

  it("should contain a title", () => {
    expect(wrapper.find("h1").length).toBe(1);
  });
});
