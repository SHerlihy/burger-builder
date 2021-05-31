import React from "react";
import { render, waitFor, cleanup } from "@testing-library/react";
// render, fireEvent,
// import { getByTestId } from "react-testing-library";
import mockedAxios from "axios";
import Builder from "./Builder";

afterEach(cleanup);

describe("static components render", () => {
  test("should render Builder", () => {
    const { getAllByTestId } = render(<Builder />);
    const builderNode = getAllByTestId("component-Builder");
    expect(builderNode.length).toBe(1);
  });
});

describe("axios get request", () => {
  test("should render number of choices equal to number of ingredients", async () => {
    const data = {
      data: [
        { name: "patty", stock: 10, price: 0.5 },
        { name: "cheese", stock: 30, price: 0.3 },
        { name: "bacon", stock: 5, price: 0.4 },
      ],
    };
    mockedAxios.get.mockResolvedValueOnce(data);
    const { getAllByTestId } = render(<Builder />);
    await waitFor(() => {
      expect(getAllByTestId("component-Choice").length).toBe(data.data.length);
    });
  });
  test("should render only choices with stock > 0", async () => {
    const data = {
      data: [
        { name: "patty", stock: 10, price: 0.5 },
        { name: "cheese", stock: 0, price: 0.3 },
        { name: "bacon", stock: 5, price: 0.4 },
        { name: "tomato", stock: 0, price: 0.2 },
      ],
    };
    mockedAxios.get.mockResolvedValueOnce(data);
    const { getAllByTestId } = render(<Builder />);
    await waitFor(() => {
      expect(getAllByTestId("component-Choice").length).toBe(
        data.data.length - 2
      );
    });
  });
});

//can't test patch because we aren't expecting any behaviour from the returned response
