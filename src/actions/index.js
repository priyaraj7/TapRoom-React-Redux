// action types
export const ADD_BEER = "ADD_BEER";
export const REMOVE_BEER = "REMOVE_BEER";
export const UPDATE_BEER = "UPDATE_BEER";
export const SHOW_ADD_FORM = "SHOW_ADD_FORM";
export const SHOW_DETAIL_PAGE = " SHOW_DETAIL_PAGE";
export const SHOW_EDIT_FORM = "SHOW_EDIT_FORM";
export const SHOW_LIST_PAGE = "SHOW_LIST_PAGE";
export const SELL_BEER = "SELL_BEER";

// action creator function
export const showAddForm = () => ({
  type: SHOW_ADD_FORM,
  payload: {},
});

export const editBeer = (id) => ({
  type: SHOW_EDIT_FORM,
  payload: {
    id: id,
  },
});

export const addBeer = ({ name, abv, description, price, pint, brand }) => ({
  type: ADD_BEER,
  payload: {
    name,
    abv,
    description,
    price,
    pint,
    brand,
  },
});

export const removeBeer = (id) => ({
  type: REMOVE_BEER,
  payload: {
    id: id,
  },
});

export const updateBeer = ({
  name,
  brand,
  abv,
  price,
  pint,
  description,
  id,
}) => ({
  type: UPDATE_BEER,
  payload: {
    name,
    brand,
    abv,
    price,
    pint,
    description,
    id,
  },
});

export const showDetailPage = (id) => ({
  type: SHOW_DETAIL_PAGE,
  payload: {
    id,
  },
});

export const showListPage = () => ({
  type: SHOW_LIST_PAGE,
  payload: {},
});

export const sellBeer = (id, pint = 1) => ({
  type: SELL_BEER,
  payload: {
    pint,
    id,
  },
});
