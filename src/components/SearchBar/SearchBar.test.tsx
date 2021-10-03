import SearchBar from "./SearchBar";
import { shallow, ShallowWrapper } from "enzyme";
import axios from "axios";

jest.mock("axios");
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("Search Bar Component", () => {
  let wrapper: ShallowWrapper;
  console.error = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<SearchBar />);
  });

  it("should contains a search input", () => {
    expect(wrapper.find("input").length).toBe(1);
  });

  it("should contains a search button", () => {
    expect(wrapper.find("button").length).toBe(1);
  });

  it("should contains a placeholder in the search input", () => {
    expect(wrapper.find("input").props().placeholder).toBe(
      "Encontre o produto que deseja aqui..."
    );
  });

  it("should be possible to fill the search input", () => {
    wrapper.find("input").simulate("change", { target: { value: "foo" } });
    expect(wrapper.find("input").props().value).toBe("foo");
  });

  it("should click on search and call handleSearch", () => {
    axios.get = jest.fn().mockResolvedValue({});
    wrapper.find("input").simulate("change", { target: { value: "foo" } });
    wrapper.find("button").simulate("click");
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/api/products/search?q=foo");
  });

  it("should click on search and call handleSearch with an error", () => {
    axios.get = jest.fn().mockRejectedValue({});
    wrapper.find("input").simulate("change", { target: { value: "foo" } });
    wrapper.find("button").simulate("click");
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/api/products/search?q=foo");
  });
});
