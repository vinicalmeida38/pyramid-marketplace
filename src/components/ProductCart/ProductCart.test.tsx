import { shallow, ShallowWrapper } from "enzyme";
import QuantityInput from "../QuantityInput/QuantityInput";
import ProductCart from "./ProductCart";
import { IProductCartComponent } from "./ProductCart.d";

describe("Product Cart Component", () => {
  let wrapper: ShallowWrapper;
  const productCartMock: IProductCartComponent = {
    products: { productId: "123", image: "foo", price: "123", name: "foo" },
  };
  beforeEach(() => {
    wrapper = shallow(<ProductCart products={productCartMock.products} />);
  });

  it("should contain a product image", () => {
    expect(wrapper.find("img").length).toBe(1);
    expect(wrapper.find("img").props().src).toEqual(
      productCartMock.products.image
    );
  });

  it("should contain a product name", () => {
    expect(wrapper.find(".product-cart__name").length).toBe(1);
    expect(wrapper.find(".product-cart__name").text()).toEqual(
      productCartMock.products.name
    );
  });

  it("should contain a QuantityInput Component", () => {
    expect(wrapper.find(QuantityInput).length).toBe(1);
  });

  it("should contain a product price", () => {
    expect(wrapper.find(".product-cart__price").length).toBe(1);
    expect(wrapper.find(".product-cart__price").text()).toEqual(
      productCartMock.products.price
    );
  });
});
