import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../action";
const initialState = {
  content: [],
};
const favoritesReduce = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        content: state.content.filter(
          (company) => company !== action.payload
        ),
      };

    default:
      return state;
  }
};
export default favoritesReduce;
