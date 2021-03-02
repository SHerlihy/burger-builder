import React from "react";
import ABurger from "./ABurger";

const OverlayPay = () => {
  return (
    <div className="backdrop">
      <section className="paying">
        <div className="paying__title">
          <ABurger />
          <p>PAYMENT</p>
          <p>£10.00</p>
        </div>
        <div className="paying__input">
          <input placeholder="Card number" />
          <input />
          <input />
        </div>
        <div className="paying__btns">
          <button>CANCEL</button>
          <button>PAY</button>
        </div>
      </section>
    </div>
  );
};

export default OverlayPay;
