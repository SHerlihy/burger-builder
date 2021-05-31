import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactDOM from "react-dom";
import axios from "axios";
import Choice from "../Components/Choice";
import Ingredient from "../Components/Ingredient";
import SellBar from "../Components/SellBar";
import OverlayPay from "../Components/OverlayPay";
import BunTop from "../Components/BunTop";
import { v4 as uuidv4 } from "uuid";
import { subIngredient } from "../actions";

const Builder = ({ overlay, buying }) => {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredients);
  // const [ingredients, setIngredients] = useState([]);

  const [price, setPrice] = useState(0);

  const [stock, setStock] = useState([]);

  const [bought, setBought] = useState(false);

  const dbURL = "http://localhost:4500";

  const getInv = () => {
    try {
      axios.get(`${dbURL}/`).then((response) => {
        setStock(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const patchInv = (e) => {
    try {
      axios.patch(`${dbURL}/ingredientUsed/${e.name}`, e).then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInv();
  }, []);

  useEffect(() => {
    // array of ingredients in burger
    const present = [...new Set(ingredients)];

    // tallying the number of used ingredients in burger
    //should be sending this to back-end instead and having server do stock update
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
      patchInv(e);
    });
  }, [bought]);

  const handleBuy = () => {
    setBought((prev) => !prev);
  };

  useEffect(() => {
    let total = 0;
    ingredients.forEach((ing) => {
      const data = stock.find((e) => e.name === ing);
      total = total + Number(data.price);
    });
    setPrice(total);
  }, [ingredients]);

  const addIngredient = (e) => {
    dispatch(addIngredient(e.target.value));
    // setIngredients((prev) => [...prev, e.target.value]);
  };

  const removeIngredient = (e) => {
    const updatedIngs = [...ingredients];

    const index = updatedIngs.indexOf(e.target.value);

    if (index === -1) {
      return;
    } else {
      updatedIngs.splice(index, 1);
    }

    dispatch(subIngredient(e.target.value));
    // setIngredients(updatedIngs);
  };

  return (
    <div data-testid="component-Builder" className="screen">
      {buying &&
        ReactDOM.createPortal(
          <OverlayPay buying={buying} hide={overlay} bought={handleBuy} />,
          document.getElementById("overlay")
        )}

      <div className="build">
        <BunTop />
        {ingredients.map((ing) => {
          return <Ingredient key={uuidv4()} ingredient={ing} />;
        })}
        <div className="ingredient bun-bum"></div>
      </div>
      <SellBar
        overlay={overlay}
        price={price}
        bought={handleBuy}
        ingredients={ingredients}
      />
      <ul className="choices-area">
        {stock.map((e) => {
          if (e.stock > 0) {
            return (
              <Choice
                key={e.name}
                ingredient={e.name}
                add={addIngredient}
                remove={removeIngredient}
              />
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Builder;
