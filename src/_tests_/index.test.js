import * as actions from "../actions/index";

describe("tap room actions", () => {
  it("addBeer should create ADD_BEER action", () => {
    const action = actions.addBeer({
      name: "Gunbuster",
      brand: "Loowit Brewing Company",
      abv: 6.3,
      price: 24,
      pint: 54,
      description:
        "An easy drinking India Pale Ale featuring Simcoe, Cascade and Mosaic hops and a crisp, dry finish.",
    });
    expect(action.type).toEqual("ADD_BEER");
    expect(action.payload).toEqual({
      name: "Gunbuster",
      brand: "Loowit Brewing Company",
      abv: 6.3,
      price: 24,
      pint: 54,
      description:
        "An easy drinking India Pale Ale featuring Simcoe, Cascade and Mosaic hops and a crisp, dry finish.",
    });
  });
});

it("deleteBeer should create REMOVE_BEER action", () => {
  expect(actions.removeBeer(1)).toEqual({
    type: actions.REMOVE_BEER,
    payload: {
      id: 1,
    },
  });
});

it("toggleFrom should create TOGGLE_FORM action", () => {
  expect(actions.toggleForm()).toEqual({
    type: actions.TOGGLE_FORM,
  });
});

it("updateTime should create UPDATE_BEER action", () => {
  expect(
    actions.updateBeer({
      name: "Gunbuster",
      brand: "Loowit Brewing Company",
      abv: 6.3,
      price: 24,
      pint: 54,
      description: "xyz.",
      id: 1,
    })
  ).toEqual({
    type: actions.UPDATE_BEER,
    payload: {
      name: "Gunbuster",
      brand: "Loowit Brewing Company",
      abv: 6.3,
      price: 24,
      pint: 54,
      description: "xyz.",
      id: 1,
    },
  });
});
