import Header from "./Header";
import { shallow, ShallowWrapper } from "enzyme";
import SearchBar from "../SearchBar/SearchBar";
import { ShoppingCart } from "react-feather";
import { Link } from "react-router-dom";
import Categories from "../Categories/Categories";

describe("Header Component", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("should render the Header component", () => {
    expect(wrapper.find("header").length).toBe(1);
  });

  it("should contains a pyramid logo", () => {
    expect(wrapper.find("img").length).toBe(1);
  });

  it("should contains a Search Bar component", () => {
    expect(wrapper.find(SearchBar).length).toBe(1);
  });

  it("should contains a Shopping Cart Icon", () => {
    expect(wrapper.find(ShoppingCart).length).toBe(1);
    expect(wrapper.find(ShoppingCart).prop("color")).toEqual("white");
  });

  it("should contains a Categories section", () => {
    expect(wrapper.find(Categories).length).toBe(1);
  });

  it("should have a Link to the Home Page", () => {
    expect(wrapper.find(Link).at(0).props().to).toBe("/");
  });

  it("should have a Link to the Shopping Cart Page", () => {
    expect(wrapper.find(Link).at(1).props().to).toBe("/shopping-cart");
  });
});
