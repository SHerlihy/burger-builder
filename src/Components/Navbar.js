import React from "react";
import ABurger from "./ABurger";

const Navbar = () => {
  const clickHomeHandler = () => {};

  const clickBuyHandler = () => {};
  const clickOptionsHandler = () => {};
  return (
    <div className="navbar">
      <div className="home" onClick={clickHomeHandler}>
        <ABurger />
        <p>BurgerTime</p>
      </div>
      <div className="nav-btns">
        <button onClick={clickOptionsHandler}>Options</button>
        <button onClick={clickBuyHandler}>BUY</button>
      </div>
    </div>
  );
};

export default Navbar;
