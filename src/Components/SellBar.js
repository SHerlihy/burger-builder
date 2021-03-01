import React from "react";

const SellBar = ({ price, bought, ingredients }) => {
  const total = price.toFixed(2);
  return (
    <div className="sell-bar">
      <p>£{total}</p>
      <button onClick={() => bought(test)} value={ingredients}>
        BUY ME
      </button>
    </div>
  );
};

export default SellBar;
