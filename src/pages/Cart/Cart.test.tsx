import Cart from "./Cart";
import { ShallowWrapper, shallow } from "enzyme";
import { IProductCart } from "../../components/ProductCart/ProductCart.d";
import React, { useState as useStateMock } from "react";

describe("Cart Page", () => {
  let wrapper: ShallowWrapper;
  let useEffect: jest.SpyInstance;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((fn: Function) => fn());
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
  ];

  beforeEach(() => {
    wrapper = shallow(<Cart />);
  });
  it("should contain a title", () => {
    expect(wrapper.find("h1").length).toBe(1);
  });

  it("test", () => {
    const isLoading = React.useState;
    const setLoading = jest.fn().mockReturnValue(false);
    jest.spyOn(React, 'useState').mockImplementationOnce(() => isLoading(setLoading));

    wrapper = shallow(
      <Cart />
    );
    console.log(wrapper.debug());
  });
});
