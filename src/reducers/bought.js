const bought = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_BOUGHT":
      return !state;
    default:
      return state;
  }
};

export default bought;
