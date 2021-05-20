import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import SellBar from "./SellBar";

describe("SellBar component", () => {
  test("renders buy me button", () => {
    //Arrange
    render(
      <SellBar
        price={6}
        bought={console.log("bought called")}
        ingredients={[]}
        overlay={console.log("overlay called")}
      />
    );
    //Act
    const buttons = screen.getAllByRole("button");

    const btn = buttons.find((e) => {
      if (e.textContent === "BUY ME") return e;
    });

    userEvent.click(btn);
    //Assert
    expect(btn).toBeInTheDocument();
  });
});
