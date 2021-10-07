import Address from "./Address";
import { shallow, ShallowWrapper } from "enzyme";
import SimpleHeader from "../../components/Header/SimpleHeader";
import { useHistory } from "react-router-dom";

const paymentUrl = "/payment";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn().mockImplementation(() => paymentUrl),
  }),
}));

describe("Address Page", () => {
  let wrapper: ShallowWrapper;

  const inputIds = [
    "name",
    "cep",
    "state",
    "city",
    "street",
    "district",
    "number",
    "complement",
    "contact",
  ];

  const fillAllInputs = () => {
    inputIds.forEach((id) => {
      wrapper.find(`#${id}`).simulate("change", { target: { value: "foo" } });
    });
  };

  beforeEach(() => {
    wrapper = shallow(<Address />);
  });
  it("should contains a Simple Header component", () => {
    expect(wrapper.find(SimpleHeader).length).toBe(1);
  });

  it("should contains nine inputs", () => {
    expect(wrapper.find("input").length).toBe(9);
  });

  it("should contains a button disabled when all input was empty", () => {
    expect(
      wrapper.find("button").hasClass("button-pyramid disabled-button-pyramid")
    ).toEqual(true);
  });

  it("should contains a button enabled when all input was filled", () => {
    fillAllInputs();
    expect(wrapper.find("button").hasClass("button-pyramid")).toEqual(true);
  });

  it("should be possible to click on the Continue button", () => {
    fillAllInputs();
    const clickContinueButton = wrapper.find("button").simulate("click");
    expect(clickContinueButton).toEqual({});
  });

  it("should be possible to submit the address form", () => {
    const history = useHistory();
    wrapper.find("form").simulate("submit", { preventDefault: jest.fn() });
    expect(history.push.call(1, paymentUrl)).toBe(paymentUrl);
  });
});
