import Address from "./Address";
import { shallow, ShallowWrapper } from "enzyme";
import SimpleHeader from "../../components/Header/SimpleHeader";

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
  it("should contains a Simple header component", () => {
    expect(wrapper.find(SimpleHeader).length).toBe(1);
  });

  it("should contains nine inputs", () => {
    expect(wrapper.find("input").length).toBe(9);
  });

  it("should have the Continue button disabled when all input was empty", () => {
    expect(
      wrapper.find("button").hasClass("button-pyramid disabled-button-pyramid")
    ).toEqual(true);
  });

  it("should have the Continue button enable when all input was filled", () => {
    fillAllInputs();
    expect(wrapper.find("button").hasClass("button-pyramid")).toEqual(true);
  });

  it("should be able to click on the Continue button", () => {
    fillAllInputs();
    const clickContinueButton = wrapper.find("button").simulate("click");
    expect(clickContinueButton).toEqual({});
  });

  // it("should call the handleAddress function on submit", () => {
  //   const submitForm = wrapper.find("button").simulate("click");
  //   expect(submitForm).toBeCalledWith(1);
  // });
});
