import React, { useState, useEffect } from "react";
import axios from "axios";
import Choice from "../Components/Choice";
import Ingredient from "../Components/Ingredient";
import SellBar from "../Components/SellBar";

const Builder = () => {
  const [ingredients, setIngredients] = useState([]);

  const [price, setPrice] = useState(0);

  const [stock, setStock] = useState([]);

  const [bought, setBought] = useState(false);

  const dbURL = "http://localhost:4500";

  useEffect(() => {
    try {
      axios.post(`${dbURL}/ingredients/${name}`).then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [bought]);

  const handleBuy = () => {
    setBought((prev) => !prev);
  };

  useEffect(() => {
    try {
      axios.get(`${dbURL}/`).then((response) => {
        setStock(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

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
        {stock.map((ing) => {
          return <p>{ing.name}</p>;
        })}
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
