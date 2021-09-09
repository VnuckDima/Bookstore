import { combineReducers } from "redux";

import filterReducer from "./filter";
import booksReducer from "./books";

const rootReducer = combineReducers({
  filter: filterReducer,
  books: booksReducer,
});

export default rootReducer;
