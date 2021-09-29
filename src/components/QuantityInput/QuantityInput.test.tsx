import QuantityInput from "./QuantityInput";
import { shallow, ShallowWrapper } from "enzyme";
import { Minus } from "react-feather";

describe("Quantity Input Component", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<QuantityInput />);
  });

  it("should contain a increase button", () => {
    expect(wrapper.find(".quantity-input__increase-btn").length).toBe(1);
  });

  it("should contain a input field", () => {
    expect(wrapper.find(".quantity-input__input").length).toBe(1);
  });

  it("should contain a decrease button", () => {
    expect(wrapper.find(".quantity-input__decrease-btn").length).toBe(1);
  });

  it("should contain 1 product in the input field by default", () => {
    expect(wrapper.find(".quantity-input__input").props().value).toEqual(1);
  });

  it("should be possible to increase a value", () => {
    wrapper.find(".quantity-input__increase-btn").simulate("click");
    expect(wrapper.find("input").props().value).toEqual(2);
  });

  it("should be possible to decrease a value", () => {
    wrapper.find("input").simulate("change", { target: { value: 5 } });
    wrapper.find(".quantity-input__decrease-btn").simulate("click");
    expect(wrapper.find("input").props().value).toEqual(4);
    expect(wrapper.find(Minus).props().color).toBe("#f94f35");
  });

  it("should disable the decrease button when the quantity is 1", () => {
    wrapper.find(".quantity-input__decrease-btn").simulate("click");
    expect(wrapper.find("input").props().value).toEqual(1);
    expect(wrapper.find(Minus).props().color).toBe("#bcbcbc");
  });
});
