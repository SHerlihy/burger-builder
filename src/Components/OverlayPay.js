import React, { useEffect } from "react";
import ABurger from "./ABurger";

const OverlayPay = ({ buying, hide }) => {
  useEffect(() => {
    console.log("effecting");
  }, [buying]);

  const toggleHide = buying ? "backdrop hide" : "backdrop";

  return (
    <div className={toggleHide}>
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
          <button onClick={hide}>CANCEL</button>
          <button>PAY</button>
        </div>
      </section>
    </div>
  );
};

export default OverlayPay;
