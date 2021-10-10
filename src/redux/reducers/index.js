import { combineReducers } from "redux";

import filter from "./filter";
import books from "./books";
import cart from "./cart";

const rootReducer = combineReducers({
  filter,
  books,
  cart,
});

export default rootReducer;
