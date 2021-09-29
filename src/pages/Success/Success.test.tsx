import Success from "./Success";
import { shallow, ShallowWrapper } from "enzyme";
import SimpleHeader from "../../components/Header/SimpleHeader";
import checkCircle from "../../assets/images/check_circle.svg";
import axios from "axios";

jest.mock("react-router-dom", () => ({
  useLocation: () => ({
    state: "1",
  }),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("axios");

describe("Success Page", () => {
  let wrapper: ShallowWrapper;
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  beforeEach(() => {
    wrapper = shallow(<Success />);
  });

  it("should contain a Simple Header component", () => {
    expect(wrapper.find(SimpleHeader).length).toBe(1);
  });

  it("should contain success check image", () => {
    expect(wrapper.find("img").length).toBe(1);
    expect(wrapper.find("img").props().src).toBe(checkCircle);
  });

  it("should contain a success title", () => {
    expect(wrapper.find("h1").length).toBe(1);
    expect(wrapper.find("h1").text()).toEqual("Compra finalizada");
  });

  it("should contain a success message", () => {
    expect(wrapper.find("p").length).toBe(1);
    expect(wrapper.find("p").text()).toEqual(
      "Seu pedido foi encaminhado para o vendedor"
    );
  });

  it("should be possible to click on return button", () => {
    const deleteCart = mockedAxios.delete.mockResolvedValue({});
    wrapper.find("button").simulate("click");
    expect(deleteCart).toHaveBeenCalledTimes(1);
    expect(deleteCart).toHaveBeenCalledWith("/api/shopping-cart/1");
  });
});
