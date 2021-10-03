import { shallow, ShallowWrapper } from "enzyme";
import Header from "../../components/Header/Header";
import SearchResult from "./SearchResult";
import { IProductComponent } from "../../components/Product/Product.d";
import Product from "../../components/Product/Product";

const products: IProductComponent[] = [];

jest.mock("react-router-dom", () => ({
  useLocation: () => ({
    state: products,
  }),
}));

describe("Search Result Page", () => {
  let wrapper: ShallowWrapper;

  it("should contains a Header component", () => {
    wrapper = shallow(<SearchResult />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  it("should not contains a Product component", () => {
    expect(wrapper.find(Product).length).toBe(0);
  });

  it("should contains a Product component", () => {
    products.push({
      id: "string",
      image: "string",
      name: "string",
      price: "string",
    });
    wrapper = shallow(<SearchResult />);
    expect(wrapper.find(Product).length).toBe(1);
  });
});
