import React from "react";
import ABurger from "./ABurger";

const Navbar = ({ overlay }) => {
  return (
    <div className="navbar">
      <div className="home">
        <ABurger />
        <p>BurgerTime</p>
      </div>
      <div className="nav-btns">
        <button onClick={overlay}>BUY</button>
      </div>
    </div>
  );
};

export default Navbar;
