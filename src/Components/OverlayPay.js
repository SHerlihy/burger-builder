import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBuying, toggleBought } from "../actions";
import ABurger from "./ABurger";

const OverlayPay = () => {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.price).toFixed(2);
  return (
    <div data-test="component-OverlayPay">
      <section className="paying">
        <div className="paying__title">
          <ABurger />
          <p>PAYMENT</p>
          <p>£{price}</p>
        </div>
        <div className="paying__input">
          <input placeholder="Card number" />
          <input />
          <input />
        </div>
        <div className="paying__btns">
          <button onClick={() => dispatch(toggleBuying())}>CANCEL</button>
          <button onClick={() => dispatch(toggleBought())}>PAY</button>
        </div>
      </section>
    </div>
  );
};

export default OverlayPay;
