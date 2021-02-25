import React from "react";
import Choice from "../Components/Choice";
import Ingredient from "../Components/Ingredient";
import SellBar from "../Components/SellBar";

const Builder = () => {
  return (
    <div className="screen">
      <div className="build">
        <div className="ingredient bun-top">
          <div className="seeds1 seeds"></div>
          <div className="seeds2 seeds"></div>
          <div className="seeds3 seeds"></div>
          <div className="seeds4 seeds"></div>
          <div className="seeds5 seeds"></div>
          <div className="seeds6 seeds"></div>
        </div>
        <Ingredient ingredient="patty" />
        <Ingredient ingredient="patty" />
        <Ingredient ingredient="patty" />
        <div className="ingredient bun-bum"></div>
      </div>
      <SellBar price="£7.95" />
      <Choice ingredient="patty" />
      <Choice ingredient="cheese" />
      <Choice ingredient="bacon" />
      <Choice ingredient="salad" />
    </div>
  );
};

export default Builder;
