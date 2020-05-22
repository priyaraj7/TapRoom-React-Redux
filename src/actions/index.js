// action types
export const ADD_BEER = "ADD_BEER";
export const REMOVE_BEER = "REMOVE_BEER";
export const UPDATE_BEER = "UPDATE_BEER";
export const TOGGLE_FORM = "TOGGLE_FORM";
export const SHOW_ADD_FORM = "SHOW_ADD_FORM";
export const SHOW_UPDATE_FORM = "SHOW_UPDATE_FORM";

// action creator function
export const showAddForm = () => ({
  type: SHOW_ADD_FORM,
  payload: {},
});

export const showUpdateForm = () => ({
  type: SHOW_UPDATE_FORM,
  payload: {},
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

export const toggleForm = () => ({
  type: TOGGLE_FORM,
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
