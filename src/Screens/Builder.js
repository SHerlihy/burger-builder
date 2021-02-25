import React, { useState, useEffect } from "react";
import Choice from "../Components/Choice";
import Ingredient from "../Components/Ingredient";
import SellBar from "../Components/SellBar";

const Builder = () => {
  const [ingredients, setIngredients] = useState([]);

  const [price, setPrice] = useState(0);

  const prices = {
    patty: 2,
    bacon: 1,
    cheese: 0.5,
    salad: 0.4,
  };

  useEffect(() => {
    let total = 0;
    ingredients.forEach((ing) => {
      total = total + prices[ing];
    });
    setPrice(total);
  }, [ingredients]);

  const addIngredient = (e) => {
    setIngredients((prev) => [...prev, e.target.value]);
  };

  const removeIngredient = (e) => {
    setIngredients((prev) => {
      const index = prev.indexOf(e.target.value);
      if (index > -1) {
        return prev.splice(index, 1);
      }
      return prev;
    });
  };

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
        {ingredients.map((ing) => {
          return <Ingredient ingredient={ing} />;
        })}
        <Ingredient ingredient="patty" />
        <Ingredient ingredient="patty" />
        <Ingredient ingredient="patty" />
        <div className="ingredient bun-bum"></div>
      </div>
      <div className="choices-area">
        <SellBar price={price} />
        <Choice
          ingredient="patty"
          add={addIngredient}
          remove={removeIngredient}
        />
        <Choice
          ingredient="cheese"
          add={addIngredient}
          remove={removeIngredient}
        />
        <Choice
          ingredient="bacon"
          add={addIngredient}
          remove={removeIngredient}
        />
        <Choice
          ingredient="salad"
          add={addIngredient}
          remove={removeIngredient}
        />
      </div>
    </div>
  );
};

export default Builder;
