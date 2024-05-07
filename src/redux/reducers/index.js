import {
  ADD_TO_FAVORITES,
  GET_JOBS,
  GET_JOBS_ERROR_OFF,
  GET_JOBS_ERROR_ON,
  GET_JOBS_LOADING_OFF,
  GET_JOBS_LOADING_ON,
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
  jobs: {
    content: [],
    isLoading: true,
    hasError: false,
    errorMessage: "",
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
    case GET_JOBS:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case GET_JOBS_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };
    case GET_JOBS_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };

    case GET_JOBS_ERROR_ON:
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload,
      };

    case GET_JOBS_ERROR_OFF:
      return {
        ...state,
        hasError: false,
        errorMessage: "",
      };

    default:
      return state;
  }
};
export default mainReducer;
