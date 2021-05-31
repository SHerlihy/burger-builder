import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBought, toggleBuying } from "../actions";

const SellBar = () => {
  const dispatch = useDispatch();

  const price = useSelector((state) => state.price);

  const total = price.toFixed(2);

  return (
    <div className="sell-bar">
      <p>£{total}</p>
      <button
        onClick={
          (() => dispatch(toggleBought()), () => dispatch(toggleBuying()))
        }
      >
        BUY ME
      </button>
    </div>
  );
};

export default SellBar;
