const ingredients = (state = [], action) => {
  switch (action.type) {
    case "ADD_INGREDIENT":
      return [...state, action.payload];
    case "SUB_INGREDIENT":
      const arr = [...state];
      const index = arr.indexOf(`${action.payload}`);
      arr.splice(index, 1);
      return arr;
    default:
      return state;
  }
};

export default ingredients;
