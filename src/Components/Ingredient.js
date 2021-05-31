import React from "react";

const Ingredient = ({ ingredient }) => {
  const ingCSS = `ingredient ${ingredient}`;
  return <img id="component-Ingredient" className={ingCSS} />;
};

export default Ingredient;
