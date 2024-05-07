import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";

import favoritesReduce from "../reducers/addToFavorites";
const rootReducer = combineReducers({
  favorites: favoritesReduce,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
