import axios from "axios";
import { shallow, ShallowWrapper } from "enzyme";
import Categories from "./Categories";

jest.mock("axios");
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("Categories Component", () => {
  let wrapper: ShallowWrapper;
  console.error = jest.fn();

  const categoryMock = [
    {
      label: "foo",
      query: "foo",
    },
  ];

  beforeEach(() => {
    wrapper = shallow(<Categories categories={categoryMock} />);
  });

  it("should contains a category", () => {
    expect(wrapper.find("li").length).toBe(1);
    expect(wrapper.find("li").text()).toBe("foo");
  });

  it("should click on a category and call handleCategory", () => {
    axios.get = jest.fn().mockResolvedValue({});
    wrapper.find("li").simulate("click");
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/api/products/category?q=foo");
  });

  it("should click on a category and call handleCategory with an error", () => {
    axios.get = jest.fn().mockResolvedValue({});
    wrapper.find("li").simulate("click");
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/api/products/category?q=foo");
  });
});
