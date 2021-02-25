import React from "react";

const Ingredient = ({ ingredient }) => {
  const ingCSS = `ingredient ${ingredient}`;
  return <img className={ingCSS} />;
};

export default Ingredient;
