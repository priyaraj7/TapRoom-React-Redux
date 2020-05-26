import * as actions from "../../actions/index";

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

  it("deleteBeer should create REMOVE_BEER action", () => {
    expect(actions.removeBeer(1)).toEqual({
      type: actions.REMOVE_BEER,
      payload: {
        id: 1,
      },
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
  it("showAddForm should create SHOW_ADD_FORM action", () => {
    expect(actions.showAddForm()).toEqual({
      type: actions.SHOW_ADD_FORM,
      payload: {},
    });
  });
  it("showDetailPage should create SHOW_DETAIL_PAGE  action", () => {
    expect(actions.showDetailPage(1)).toEqual({
      type: actions.SHOW_DETAIL_PAGE,
      payload: { id: 1 },
    });
  });

  it("editBeer should create SHOW_EDIT_FORM  action", () => {
    expect(actions.editBeer(1)).toEqual({
      type: actions.SHOW_EDIT_FORM,
      payload: { id: 1 },
    });
  });
  it("listPage should create SHOW_LIST_PAGE action", () => {
    expect(actions.showListPage()).toEqual({
      type: actions.SHOW_LIST_PAGE,
      payload: {},
    });
  });

  it("sellBeer should create SELL_BEER  action", () => {
    expect(actions.sellBeer(1)).toEqual({
      type: actions.SELL_BEER,
      payload: {
        id: 1,
        pint: 1,
      },
    });
  });
});
