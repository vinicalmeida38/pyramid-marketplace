import SearchBar from "./SearchBar";
import { shallow, ShallowWrapper } from "enzyme";
import axios from "axios";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("axios");

describe("Search Bar Component", () => {
  let wrapper: ShallowWrapper;
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  beforeEach(() => {
    wrapper = shallow(<SearchBar />);
  });

  it("should contain a search input", () => {
    expect(wrapper.find("input").length).toBe(1);
  });

  it("should contain a search button", () => {
    expect(wrapper.find("button").length).toBe(1);
  });

  it("should contain a placeholder in the search input", () => {
    expect(wrapper.find("input").props().placeholder).toBe(
      "Encontre o produto que deseja aqui..."
    );
  });

  it("should be possible to fill the search input", () => {
    wrapper.find("input").simulate("change", { target: { value: "foo" } });
    expect(wrapper.find("input").props().value).toBe("foo");
  });

  it("should be possible to do a valid search", () => {
    const res = { status: 200 };
    const search = mockedAxios.get.mockResolvedValue(res);
    wrapper.find("input").simulate("change", { target: { value: "foo" } });
    wrapper.find("button").simulate("click");
    expect(search).toHaveBeenCalledTimes(1);
    expect(search).toHaveBeenCalledWith("/api/products/search?q=foo");
  });

  it("should be coverage a invalid search", () => {
    const res = { status: 400 };
    const search = mockedAxios.get.mockResolvedValue(res);
    wrapper.find("input").simulate("change", { target: { value: "foo" } });
    wrapper.find("button").simulate("click");
    expect(search).toHaveBeenCalledTimes(1);
    expect(search).toHaveBeenCalledWith("/api/products/search?q=foo");
  });
});
