const stock = (state = [], action) => {
  switch (action.type) {
    case "SET_STOCK":
      return action.payload;
    default:
      return state;
  }
};

export default stock;
