import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import OverlayPay from "./OverlayPay";

describe("OverlayPay component", () => {
  test("shows cancel and pay buttons", () => {
    //Arrange
    render(<OverlayPay />);
    //Act
    //Assert
    const overlay = screen.getAllByRole("button");

    overlay.forEach((e) => {
      expect(e).toBeInTheDocument();
    });

    const cancelBtn = overlay.some((e) => {
      if (e.textContent === "CANCEL") return true;
    });

    expect(cancelBtn).toEqual(true);

    const payBtn = overlay.some((e) => {
      if (e.textContent === "PAY") return true;
    });

    expect(payBtn).toEqual(true);
  });
  test("has multiple input elements", () => {
    //Arrange
    render(<OverlayPay />);
    //Act
    //Assert
    const inputEles = screen.getAllByRole("textbox");
    expect(inputEles.length).toBeGreaterThan(1);
  });
});
