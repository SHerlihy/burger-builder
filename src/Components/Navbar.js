import React from "react";
import { useDispatch } from "react-redux";
import { toggleBuying } from "../actions";
import ABurger from "./ABurger";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className="home">
        <ABurger />
        <p>BurgerTime</p>
      </div>
      <div className="nav-btns">
        <button onClick={() => dispatch(toggleBuying())}>BUY</button>
      </div>
    </div>
  );
};

export default Navbar;
