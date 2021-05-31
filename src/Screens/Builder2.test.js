import { shallow, render, mount } from "enzyme";
import React from "react";
import Builder from "./Builder";

it("expect Builder to render", () => {
  expect(shallow(<Builder />).length).toEqual(1);
});

describe("state controlled ingredients", () => {
  // let mockSetIngredients = jest.fn();
  // let wrapper;

  // beforeEach(() => {
  //   mockSetIngredients.mockClear();
  //   React.useState = () => [[], mockSetIngredients];
  // });
  test("should render ingredients when setIngredients is called", () => {
    // const wrapper = render(<Builder />);
    // const instance = wrapper.instance();
    const instance = render(<Builder />).instance();

    console.log(instance);
  });
});
