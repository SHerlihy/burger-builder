import React, { useState, useEffect } from "react";
import axios from "axios";
import Choice from "../Components/Choice";
import Ingredient from "../Components/Ingredient";
import SellBar from "../Components/SellBar";
import OverlayPay from "../Components/OverlayPay";

const Builder = () => {
  const [ingredients, setIngredients] = useState([]);

  const [price, setPrice] = useState(0);

  const [stock, setStock] = useState([]);

  const [bought, setBought] = useState(false);

  const dbURL = "http://localhost:4500";

  useEffect(() => {
    const resetObj = [
      { name: "patty", used: 70 },
      { name: "cheese", used: 70 },
      { name: "bacon", used: 70 },
      { name: "salad", used: 70 },
    ];
    const present = [...new Set(ingredients)];

    const usedObj = present.map((e) => {
      let tot = 0;
      ingredients.forEach((el) => {
        if (e === el) {
          tot = tot - 1;
        }
      });
      return { name: e, used: tot };
    });

    usedObj.forEach((e) => {
      stock.forEach((el) => {
        if (e.name === el.name) {
          e.used = e.used + el.stock;
        }
      });
    });

    usedObj.forEach((e) => {
      try {
        axios.patch(`${dbURL}/stock/${e.name}`, e).then((response) => {
          console.log(response);
        });
      } catch (error) {
        console.log(error);
      }
    });
  }, [bought]);

  const handleBuy = (e) => {
    console.log(e);
    setBought((prev) => !prev);
    // setBought((prev) => e.target.value);
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

  //think that this changes state so keeps looping through
  const removeIngredient = (e) => {
    const updatedIngs = [...ingredients];

    const index = updatedIngs.indexOf(e.target.value);

    console.log(index);
    if (index === -1) {
      return;
    } else {
      updatedIngs.splice(index, 1);
    }

    setIngredients(updatedIngs);
  };

  return (
    <div className="screen">
      <OverlayPay />
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
        <div className="ingredient bun-bum"></div>
      </div>
      <SellBar price={price} bought={handleBuy} ingredients={ingredients} />

      <div className="choices-area">
        {stock.map((e) => {
          if (e.stock > 0) {
            return (
              <Choice
                ingredient={e.name}
                add={addIngredient}
                remove={removeIngredient}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Builder;
