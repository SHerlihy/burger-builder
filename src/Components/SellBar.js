import React from "react";

const SellBar = ({ price, bought, ingredients, overlay }) => {
  const total = price.toFixed(2);
  return (
    <div className="sell-bar">
      <p>£{total}</p>
      <button onClick={(bought, overlay)} value={ingredients}>
        BUY ME
      </button>
    </div>
  );
};

export default SellBar;
