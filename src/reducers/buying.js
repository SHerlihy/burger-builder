const buying = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_BUYING":
      return !state;
    default:
      return state;
  }
};

export default buying;
