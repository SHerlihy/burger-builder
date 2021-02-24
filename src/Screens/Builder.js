import React from "react";
import Choice from "../Components/Choice";
import SellBar from "../Components/SellBar";

const Builder = () => {
  return (
    <div className="screen">
      <SellBar price="£7.95" />
      <Choice ingredient="patty" />
      <Choice ingredient="cheese" />
      <Choice ingredient="bacon" />
      <Choice ingredient="salad" />
    </div>
  );
};

export default Builder;
