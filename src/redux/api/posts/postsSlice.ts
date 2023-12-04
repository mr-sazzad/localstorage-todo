import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostsState {
  likedPostsIds: string[];
  savedPostsIds: string[];
}

// Check if localStorage is available
const isLocalStorageAvailable = typeof localStorage !== "undefined";

const storedLikedPostsIdsString = isLocalStorageAvailable
  ? localStorage.getItem("likedPostsIds")
  : null;
const storedSavedPostsIdsString = isLocalStorageAvailable
  ? localStorage.getItem("savedPostIds")
  : null;

const initialState: PostsState = {
  likedPostsIds: storedLikedPostsIdsString
    ? JSON.parse(storedLikedPostsIdsString)
    : [],
  savedPostsIds: storedSavedPostsIdsString
    ? JSON.parse(storedSavedPostsIdsString)
    : [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // ------------ Like post ------------
    likePost: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      state.likedPostsIds = state.likedPostsIds.includes(id)
        ? state.likedPostsIds.filter((postId) => postId !== id)
        : [...state.likedPostsIds, id];

      isLocalStorageAvailable &&
        localStorage.setItem(
          "likedPostsIds",
          JSON.stringify(state.likedPostsIds)
        );
    },

    // ------------ Save post ------------
    savePost: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      state.savedPostsIds = state.savedPostsIds.includes(id)
        ? state.savedPostsIds.filter((postsId) => postsId !== id)
        : [...state.savedPostsIds, id];

      // Save savedPostsIds in local storage
      isLocalStorageAvailable &&
        localStorage.setItem(
          "savedPostsIds",
          JSON.stringify(state.savedPostsIds)
        );
    },
  },
});

export const { likePost, savePost } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
