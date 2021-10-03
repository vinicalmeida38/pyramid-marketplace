import Success from "./Success";
import { shallow, ShallowWrapper } from "enzyme";
import SimpleHeader from "../../components/Header/SimpleHeader";
import checkCircle from "../../assets/images/check_circle.svg";
import axios from "axios";

jest.mock("axios");
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("Success Page", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Success />);
  });

  it("should contains a Simple Header component", () => {
    expect(wrapper.find(SimpleHeader).length).toBe(1);
  });

  it("should contains success check image", () => {
    expect(wrapper.find("img").length).toBe(1);
    expect(wrapper.find("img").props().src).toBe(checkCircle);
  });

  it("should contains a success title", () => {
    expect(wrapper.find("h1").length).toBe(1);
    expect(wrapper.find("h1").text()).toEqual("Compra finalizada");
  });

  it("should contains a success message", () => {
    expect(wrapper.find("p").length).toBe(1);
    expect(wrapper.find("p").text()).toEqual(
      "Seu pedido foi encaminhado para o vendedor"
    );
  });

  it("should be possible to click on return button", () => {
    axios.delete = jest.fn().mockResolvedValue({});
    wrapper.find("button").simulate("click");
    expect(axios.delete).toHaveBeenCalledTimes(1);
    expect(axios.delete).toHaveBeenCalledWith("/api/shopping-cart");
  });
});
