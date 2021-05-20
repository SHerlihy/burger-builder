import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  test("renders all static text", () => {
    //Arrange
    render(<Navbar />);
    //Act
    //Assert
    const burgerTimeEle = screen.getByText("BurgerTime");
    const buyEle = screen.getByText("BUY");

    expect(burgerTimeEle).toBeInTheDocument();
    expect(buyEle).toBeInTheDocument();
  });
  test("BUY button calls overlay function on click", () => {
    //Arrange
    let overlay = false;
    const overlayFired = () => {
      overlay = true;
    };
    render(<Navbar overlay={overlayFired} />);
    //Act
    const buyEle = screen.getByText("BUY");
    userEvent.click(buyEle);
    //Assert
    expect(overlay).toBe(true);
  });
});
