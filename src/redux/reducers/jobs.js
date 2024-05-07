import {
  GET_JOBS,
  GET_JOBS_LOADING_ON,
  GET_JOBS_LOADING_OFF,
  GET_JOBS_ERROR_ON,
  GET_JOBS_ERROR_OFF,
} from "../action";
const initialState = {
  content: [],
  isLoading: true,
  hasError: false,
  errorMessage: "",
};
const jobsreduce = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        content: action.payload,
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
export default jobsreduce;
