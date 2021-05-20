import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import OverlayPay from "./OverlayPay";

describe("OverlayPay component", () => {
  test("shows when buying prop is true", () => {
    //Arrange
    render(<OverlayPay buying={true} />);
    //Act
    //Assert
    const overlay = screen.getAllByRole("button", { hidden: true });
    overlay.forEach((e) => {
      expect(e).toBeVisible();
    });
  });
  test("hides when buying prop is false", () => {
    //Arrange
    render(<OverlayPay buying={false} />);
    //Act
    //Assert
    const overlay = screen.getByLabelText("overlay");
    expect(overlay).toHaveStyle({ visibility: "hidden" });
    // overlay.forEach((e) => {
    //   expect(e).toHaveStyle({ visibility: "hidden" });
    // });
  });
});
