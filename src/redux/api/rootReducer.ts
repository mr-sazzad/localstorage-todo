import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";
import { photosReducer } from "./photos/photosSlice";

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  photos: photosReducer,
});

export default rootReducer;
