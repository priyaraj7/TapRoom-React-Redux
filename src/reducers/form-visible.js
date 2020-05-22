import { SHOW_ADD_FORM, SHOW_UPDATE_FORM } from "../actions/index";

export default (state = "", action) => {
  switch (action.type) {
    case SHOW_ADD_FORM:
      return "addForm";
    case SHOW_UPDATE_FORM:
      return "updateForm";
    default:
      return state;
  }
};
