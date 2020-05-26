import formVisibleReducer from "../../reducers/form-visible";
import {
  SHOW_ADD_FORM,
  SHOW_EDIT_FORM,
  SHOW_DETAIL_PAGE,
  UPDATE_BEER,
} from "../../actions/index";

describe("formVisibleReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(formVisibleReducer(undefined, { type: null })).toEqual({
      currentPage: "BEER_LIST",
      selectedBeer: undefined,
    });
  });

  test("Should show the add form, when SHOW_ADD_FORM is dispatched", () => {
    expect(formVisibleReducer(undefined, { type: SHOW_ADD_FORM })).toEqual({
      currentPage: "addForm",
      selectedBeer: undefined,
    });
  });
  test("Should show the edit form, when  SHOW_EDIT_FORM is dispatched", () => {
    expect(
      formVisibleReducer(undefined, {
        type: SHOW_EDIT_FORM,
        payload: { id: 1 },
      })
    ).toEqual({
      currentPage: "updateForm",
      selectedBeer: 1,
    });
  });

  test("Should show the detail page, when  SHOW_DETAIL_PAGE is dispatched", () => {
    expect(
      formVisibleReducer(undefined, {
        type: SHOW_DETAIL_PAGE,
        payload: { id: 1 },
      })
    ).toEqual({
      currentPage: "detailPage",
      selectedBeer: 1,
    });
  });
  test("should show the update page, when UPDATE_BEER is dispatched", () => {
    expect(
      formVisibleReducer(undefined, {
        type: UPDATE_BEER,
        payload: { id: 1 },
      })
    ).toEqual({
      currentPage: "BEER_LIST",
      selectedBeer: undefined,
    });
  });
});
