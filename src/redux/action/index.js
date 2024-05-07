export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES =
  "REMOVE_FROM_FAVORITES";
export const QUERY_USER = "QUERY_USER";
export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_LOADING_ON = "GET_JOBS_LOADING_ON";
export const GET_JOBS_LOADING_OFF = "GET_JOBS_LOADIN_OFF";
export const GET_JOBS_ERROR_ON = "GET_JOBS_ERROR_ON";
export const GET_JOBS_ERROR_OFF = "GET_JOBS_ERROR_OFF";
export const addTofavourites = (data) => ({
  type: ADD_TO_FAVORITES,
  payload: data,
});
export const removeFromfavourites = (data) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: data,
});
export const queryUser = (inputValue) => ({
  type: QUERY_USER,
  payload: inputValue,
});
export const jobsSearched = () => {
  return async (dispatch, getState) => {
    const currentState = getState();
    const query = currentState.queryuser.content;
    try {
      const resp = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
          query +
          "&limit=20"
      );
      if (resp.ok) {
        const { data } = await resp.json();
        dispatch({ type: GET_JOBS, payload: data });
        dispatch({ type: GET_JOBS_ERROR_OFF });
      } else {
        throw new Error("Qualcosa è andato storto");
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_JOBS_ERROR_ON,
        payload: error.message,
      });
    } finally {
      dispatch({ type: GET_JOBS_LOADING_OFF });
    }
  };
};
