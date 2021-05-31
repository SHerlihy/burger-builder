import ingredients from "./ingredients";
import buying from "./buying";
import bought from "./bought";
import price from "./price";
import stock from "./stock";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  ingredients,
  buying,
  bought,
  price,
  stock,
});

export default allReducers;
