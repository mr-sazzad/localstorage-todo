import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";
import { photosReducer } from "./photos/photosSlice";
import { postsReducer } from "./posts/postsSlice";

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  photos: photosReducer,
  posts: postsReducer,
});

export default rootReducer;
