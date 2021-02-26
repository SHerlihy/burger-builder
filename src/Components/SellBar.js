import React from "react";

const SellBar = ({ price }) => {
  return (
    <div className="choice">
      <p>£{price}</p>
      <button>BUY ME</button>
    </div>
  );
};

export default SellBar;
