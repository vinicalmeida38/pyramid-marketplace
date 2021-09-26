import { ShallowWrapper, shallow } from "enzyme";
import { Link } from "react-router-dom";
import SimpleHeader from "./SimpleHeader";

describe("Simple Header Component", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<SimpleHeader />);
  });

  it("should render the Header component", () => {
    expect(wrapper.find("header").length).toBe(1);
  });

  it("should contain a pyramid logo", () => {
    expect(wrapper.find("img").hasClass("header-pyramid__logo")).toEqual(true);
  });

  it("should contain a Link to home page", () => {
    expect(wrapper.find(Link).props().to).toBe("/");
  });
});
