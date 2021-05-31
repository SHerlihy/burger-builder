import React from "react";
import { shallow, render } from "enzyme";
import Ingredient from "./Ingredient";

it("renders the component", () => {
  const mockedProps = { ingredient: "patty" };
  const wrap = shallow(<Ingredient {...mockedProps} />);
  console.log(wrap.find("#component-Ingredient").length);
  expect(wrap.find("#component-Ingredient").length).toBe(1);
});
