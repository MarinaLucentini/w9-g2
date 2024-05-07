import {
  ADD_TO_FAVORITES,
  QUERY_USER,
  REMOVE_FROM_FAVORITES,
} from "../action";

const initialState = {
  favoriteCompany: {
    content: [],
  },
  queryUser: {
    content: "",
  },
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        content: state.content.concat(action.payload),
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        content: state.content.filter(
          (company) => company !== action.payload
        ),
      };
    case QUERY_USER:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};
export default mainReducer;
