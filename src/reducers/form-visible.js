import {
  SHOW_ADD_FORM,
  SHOW_EDIT_FORM,
  SHOW_DETAIL_PAGE,
  SHOW_LIST_PAGE,
  UPDATE_BEER,
} from "../actions/index";

const updateForm = {
  currentPage: "BEER_LIST",
  selectedBeer: undefined,
};

export default (state = updateForm, action) => {
  switch (action.type) {
    case SHOW_ADD_FORM:
      return {
        currentPage: "addForm",
        selectedBeer: undefined,
      };
    case SHOW_DETAIL_PAGE:
      return {
        currentPage: "detailPage",
        selectedBeer: action.payload.id,
      };
    case SHOW_EDIT_FORM:
      return { currentPage: "updateForm", selectedBeer: action.payload.id };
    case SHOW_LIST_PAGE:
      return { currentPage: "BEER_LIST", selectedBeer: undefined };
    case UPDATE_BEER:
      return { currentPage: "BEER_LIST", selectedBeer: undefined };

    default:
      return state;
  }
};
