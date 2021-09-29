import Product from "./Product";
import { ShallowWrapper, shallow } from "enzyme";
import { Link } from "react-router-dom";
import { IProductComponent } from "./Product.d";

describe("Product Component", () => {
  let wrapper: ShallowWrapper;
  const productMock: IProductComponent = {
    id: "01",
    image: "foo",
    name: "foo",
    price: "foo",
  };
  beforeEach(() => {
    wrapper = shallow(
      <Product
        id={productMock.id}
        image={productMock.image}
        name={productMock.name}
        price={productMock.price}
      />
    );
  });

  it("should contain a Link to the product details", () => {
    expect(wrapper.find(Link).props().to).toBe("/product-details/01");
  });

  it("should contain a product container", () => {
    expect(wrapper.find(".product-container").length).toBe(1);
  });

  it("should contain a product image", () => {
    const productImage = wrapper.find(".product-image");
    expect(productImage.length).toBe(1);
    expect(productImage.props().src).toEqual("foo");
  });

  it("should contain a product name", () => {
    const productName = wrapper.find(".product-details__name");
    expect(productName.length).toBe(1);
    expect(productName.text()).toEqual("foo");
  });

  it("should contain a product price", () => {
    const productPrice = wrapper.find(".product-details__price");
    expect(productPrice.length).toBe(1);
    expect(productPrice.text()).toEqual("foo");
  });
});
