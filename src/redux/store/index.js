import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";

import favoritesReduce from "../reducers/addToFavorites";
import queryUser from "../reducers/queryUser";
import jobsreduce from "../reducers/jobs";
const rootReducer = combineReducers({
  favorites: favoritesReduce,
  queryuser: queryUser,
  jobs: jobsreduce,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
