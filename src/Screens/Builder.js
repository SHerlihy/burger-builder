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
    const resetObj = [
      { name: "patty", used: 20 },
      { name: "cheese", used: 14 },
      { name: "bacon", used: 13 },
      { name: "salad", used: 12 },
    ];
    const present = [...new Set(ingredients)];
    // const used = present.map((pres) => {
    //   let num = 0;
    //   ingredients.forEach((ing) => {
    //     if (pres === ing) {
    //       num = num + 1;
    //     }
    //   });
    //   return num;
    // });

    const usedObj = present.map((e) => {
      let tot = 0;
      ingredients.forEach((el) => {
        if (e === el) {
          tot = tot + 1;
        }
      });
      return { name: e, used: tot };
    });
    console.log(usedObj);

    // present.forEach((e, i) => {
    //   const newStock = stock.stock - used.i;
    //   const update = { name: e, used: newStock };
    usedObj.forEach((e) => {
      try {
        axios.patch(`${dbURL}/stock/${e.name}`, e).then((response) => {
          console.log(response);
        });
      } catch (error) {
        console.log(error);
      }
    });

    // });
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
        <div className="ingredient bun-bum"></div>
      </div>
      <div className="choices-area">
        <SellBar price={price} bought={handleBuy} ingredients={ingredients} />
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
