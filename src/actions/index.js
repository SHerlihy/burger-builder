export const addIngredient = (ing) => {
  return {
    type: "ADD_INGREDIENT",
    payload: ing,
  };
};

export const subIngredient = (ing) => {
  return {
    type: "SUB_INGREDIENT",
    payload: ing,
  };
};
