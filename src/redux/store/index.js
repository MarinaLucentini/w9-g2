import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";

import favoritesReduce from "../reducers/addToFavorites";
import queryUser from "../reducers/queryUser";
const rootReducer = combineReducers({
  favorites: favoritesReduce,
  queryuser: queryUser,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
