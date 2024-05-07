export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES =
  "REMOVE_FROM_FAVORITES";
export const addTofavourites = (data) => ({
  type: ADD_TO_FAVORITES,
  payload: data,
});
export const removeFromfavourites = (data) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: data,
});
