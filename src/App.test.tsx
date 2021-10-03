import { shallow, ShallowWrapper } from "enzyme";
import App from "./App";
import Routes from "./routes/Routes";

describe("App", () => {
  let wrapper: ShallowWrapper;

  it("should contains Routes", () => {
    wrapper = shallow(<App />);
    expect(wrapper.find(Routes).length).toBe(1);
  });
});
