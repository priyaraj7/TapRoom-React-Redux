import rootReducer from "../../reducers/index";
import formVisibleReducer from "../../reducers/form-visible";
import beerListReducer, { DEFAULT_BEER_LIST } from "../../reducers/beerlist";
import { createStore } from "redux";
import { v4 } from "uuid";
import * as c from "./../../actions/index";

jest.mock("uuid");
let store = createStore(rootReducer);

describe("rootReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterBeerList: DEFAULT_BEER_LIST,
      formVisibleOnPage: {
        currentPage: "BEER_LIST",
        selectedBeer: undefined,
      },
    });
  });

  test("Check that initial state of beerListReducer matches root reducer", () => {
    expect(store.getState().masterBeerList).toEqual(
      beerListReducer(undefined, { type: null })
    );
  });

  test("Check that initial state of formVisibleReducer matches root reducer 1", () => {
    expect(store.getState().formVisibleOnPage).toEqual(
      formVisibleReducer(undefined, { type: null })
    );
  });

  test("Check that initial state of beerListReducer matches root reducer", () => {
    const ID = "12344";
    v4.mockReturnValue(ID);
    const newBeer = {
      name: "Some New Beer",
      brand: "Brewing Company",
      abv: 6.1,
      price: 21,
      pint: 51,
      description: "XYZZZZZ",
    };
    const action = {
      type: c.ADD_BEER,
      payload: newBeer,
    };
    store.dispatch(action);
    expect(store.getState().masterBeerList).toEqual([
      ...DEFAULT_BEER_LIST,
      { ...newBeer, id: ID },
    ]);
  });
});
