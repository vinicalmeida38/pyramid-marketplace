import Product from "./Product";
import { ShallowWrapper, shallow } from "enzyme";
import { IProductComponent } from "./Product.d";
import { useHistory } from "react-router-dom";

const productDetailsUrl = "/product-details/01";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn().mockImplementation(() => productDetailsUrl),
  }),
}));

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

  it("should contains a product container", () => {
    expect(wrapper.find(".product-container").length).toBe(1);
  });

  it("should contains a product image", () => {
    const productImage = wrapper.find(".product-image");
    expect(productImage.length).toBe(1);
    expect(productImage.props().src).toEqual("foo");
  });

  it("should contains a product name", () => {
    const productName = wrapper.find(".product-details__name");
    expect(productName.length).toBe(1);
    expect(productName.text()).toEqual("foo");
  });

  it("should contains a product price", () => {
    const productPrice = wrapper.find(".product-details__price");
    expect(productPrice.length).toBe(1);
    expect(productPrice.text()).toEqual("foo");
  });

  it("should be possible click on the product", () => {
    const history = useHistory();
    wrapper.find("div").at(0).simulate("click");
    expect(history.push.call(1, productDetailsUrl)).toBe(productDetailsUrl);
  });
});
