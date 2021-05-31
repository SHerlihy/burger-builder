const price = (state = 0, action) => {
  switch (action.type) {
    case "SET_PRICE":
      return action.payload;
    default:
      return state;
  }
};

export default price;
