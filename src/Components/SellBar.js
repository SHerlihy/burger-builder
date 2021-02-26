import React from "react";

const SellBar = ({ price, bought, ingredients }) => {
  const test = "potato";
  return (
    <div className="choice">
      <p>£{price}</p>
      <button onClick={() => bought(test)} value={ingredients}>
        BUY ME
      </button>
    </div>
  );
};

export default SellBar;
