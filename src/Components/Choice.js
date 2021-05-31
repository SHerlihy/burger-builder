import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { subIngredient, addIngredient } from "../actions";

const Choice = ({ ingredient }) => {
  const dispatch = useDispatch();

  const ingredients = useSelector((state) => state.ingredients);

  const ingCSS = `ingredient ${ingredient}`;
  const capIng = ingredient.charAt(0).toUpperCase() + ingredient.substring(1);

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
    <li data-testid="component-Choice" className="choice">
      <div className="ingToken">
        <img className={ingCSS} />
      </div>
      <div className="name">
        <p>{capIng}</p>
      </div>

      <div className="select">
        <button onClick={(e) => removeIngredient(e)} value={ingredient}>
          -
        </button>
        <button
          onClick={(e) => dispatch(addIngredient(e.target.value))}
          value={ingredient}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default Choice;
