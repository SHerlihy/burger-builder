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

export const toggleBuying = (params) => {
  return {
    type: "TOGGLE_BUYING",
  };
};

export const setPrice = (total) => {
  return {
    type: "SET_PRICE",
    payload: total,
  };
};

export const setStock = (stock) => {
  return {
    type: "SET_STOCK",
    payload: stock,
  };
};

export const toggleBought = () => {
  return {
    type: "TOGGLE_BOUGHT",
  };
};
