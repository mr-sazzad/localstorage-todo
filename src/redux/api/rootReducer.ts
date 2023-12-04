import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});

export default rootReducer;
