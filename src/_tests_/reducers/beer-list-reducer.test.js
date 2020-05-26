import beerListReducer from "../../reducers/beerlist";
import {
  ADD_BEER,
  UPDATE_BEER,
  REMOVE_BEER,
  SELL_BEER,
} from "./../../actions/index";

import { v4 } from "uuid";
jest.mock("uuid");

describe("beerListReducer", () => {
  let action;

  const currentState = [
    {
      name: "beer 1",
      brand: "brand 1",
      abv: 6.1,
      price: 20,
      pint: 23,
      description: "description 1",
      id: 1,
    },
    {
      name: "beer 2",
      brand: "brand 2",
      abv: 6.0,
      price: 10,
      pint: 124,
      description: "description 2",
      id: 2,
    },
  ];

  test("Should return default state if no action type is recognized", () => {
    expect(beerListReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new beer to masterBeerList", () => {
    const newBeer = {
      name: "new beer 1",
      brand: "new brand 1",
      abv: 6.2,
      price: 21,
      pint: 11,
      description: "new description 1",
    };

    v4.mockReturnValue(100);
    action = {
      type: ADD_BEER,
      payload: newBeer,
    };
    expect(beerListReducer([], action)).toEqual([{ ...newBeer, id: 100 }]);
  });

  test("Should successfully delete a beer", () => {
    action = {
      type: REMOVE_BEER,
      payload: { id: 2 },
    };
    expect(beerListReducer(currentState, action)).toEqual([
      {
        name: "beer 1",
        brand: "brand 1",
        abv: 6.1,
        price: 20,
        pint: 23,
        description: "description 1",
        id: 1,
      },
    ]);
  });
  test("Should successfully update beer to masterBeerList", () => {
    const updatedBeer = {
      name: "update beer 1",
      brand: "update brand 1",
      abv: 6.2,
      price: 21,
      pint: 11,
      description: "update description 1",
      id: 100,
    };

    v4.mockReturnValue(100);
    action = {
      type: UPDATE_BEER,
      payload: updatedBeer,
    };
    expect(beerListReducer([{ id: 100 }], action)).toEqual([updatedBeer]);
  });

  test("Should successfully sell beer", () => {
    const beer = {
      name: "beer 1",
      brand: "brand 1",
      abv: 6.2,
      price: 21,
      pint: 11,
      description: "new description 1",
      id: 1,
    };
    action = {
      type: SELL_BEER,
      payload: { ...beer },
    };
    expect(beerListReducer([beer], action)).toEqual([
      {
        name: "beer 1",
        brand: "brand 1",
        abv: 6.2,
        price: 21,
        pint: 10,
        description: "new description 1",
        id: 1,
      },
    ]);
  });
});
