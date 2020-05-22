import beerListReducer from "./beerlist";
import formVisibleReducer from "./form-visible";
import { combineReducers } from "redux";

// combining all the reducers
const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterBeerList: beerListReducer,
});

export default rootReducer;
