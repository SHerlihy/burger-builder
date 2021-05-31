import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactDOM from "react-dom";
import axios from "axios";
import Choice from "../Components/Choice";
import Ingredient from "../Components/Ingredient";
import SellBar from "../Components/SellBar";
import OverlayPay from "../Components/OverlayPay";
import BunTop from "../Components/BunTop";
import { v4 as uuidv4 } from "uuid";
import { setPrice, setStock } from "../actions";

const Builder = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredients);
  const buying = useSelector((state) => state.buying);
  const stock = useSelector((state) => state.stock);
  const bought = useSelector((state) => state.bought);

  const dbURL = "http://localhost:4500";

  useEffect(() => {
    const getInv = () => {
      try {
        axios.get(`${dbURL}/`).then((response) => {
          dispatch(setStock(response.data));
        });
      } catch (error) {
        console.log(error);
      }
    };
    getInv();
  }, []);

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
    //ingredients not dependency as only want update when product bought
  }, [bought]);

  useEffect(() => {
    let total = 0;
    ingredients.forEach((ing) => {
      const data = stock.find((e) => e.name === ing);
      total = total + Number(data.price);
    });
    dispatch(setPrice(total));
    //don't want update on dispatch or stock change so omitted from dependencies
  }, [ingredients]);

  return (
    <div data-testid="component-Builder" className="screen">
      {buying &&
        ReactDOM.createPortal(
          <OverlayPay />,
          document.getElementById("overlay")
        )}

      <div className="build">
        <BunTop />
        {ingredients.map((ing) => {
          return <Ingredient key={uuidv4()} ingredient={ing} />;
        })}
        <div className="ingredient bun-bum"></div>
      </div>
      <SellBar />
      <ul className="choices-area">
        {stock.map((e) => {
          if (e.stock > 0) {
            return <Choice key={e.name} ingredient={e.name} />;
          }
        })}
      </ul>
    </div>
  );
};

export default Builder;
