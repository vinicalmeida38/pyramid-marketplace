import SimpleHeader from "./SimpleHeader";
import { ShallowWrapper, shallow } from "enzyme";
import { Link } from "react-router-dom";

describe("Simple Header Component", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<SimpleHeader />);
  });

  it("should contains a header", () => {
    expect(wrapper.find("header").length).toBe(1);
  });

  it("should contains a pyramid logo", () => {
    expect(wrapper.find("img").hasClass("header-pyramid__logo")).toEqual(true);
  });

  it("should contains a Link to home page", () => {
    expect(wrapper.find(Link).props().to).toBe("/");
  });
});
