import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PhotosState {
  likedPhotosIds: string[];
  savedPhotosIds: string[];
}

// Check if localStorage is available
const isLocalStorageAvailable = typeof localStorage !== "undefined";

const storedLikedPhotosIdsString = isLocalStorageAvailable
  ? localStorage.getItem("likedPhotosIds")
  : null;
const storedSavedPhotosIdsString = isLocalStorageAvailable
  ? localStorage.getItem("savedPhotosIds")
  : null;

const initialState: PhotosState = {
  likedPhotosIds: storedLikedPhotosIdsString
    ? JSON.parse(storedLikedPhotosIdsString)
    : [],
  savedPhotosIds: storedSavedPhotosIdsString
    ? JSON.parse(storedSavedPhotosIdsString)
    : [],
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    // ------------ Like photos ------------

    likePhoto: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      state.likedPhotosIds = state.likedPhotosIds.includes(id)
        ? state.likedPhotosIds.filter((photoId) => photoId !== id)
        : [...state.likedPhotosIds, id];

      // Save likedPhotosIds in local storage if available
      isLocalStorageAvailable &&
        localStorage.setItem(
          "likedPhotosIds",
          JSON.stringify(state.likedPhotosIds)
        );
    },

    // ------------ Save photos ------------

    savePhoto: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      state.savedPhotosIds = state.savedPhotosIds.includes(id)
        ? state.savedPhotosIds.filter((photoId) => photoId !== id)
        : [...state.savedPhotosIds, id];

      // Save savedPhotosIds in local storage if available
      isLocalStorageAvailable &&
        localStorage.setItem(
          "savedPhotosIds",
          JSON.stringify(state.savedPhotosIds)
        );
    },
  },
});

export const { likePhoto, savePhoto } = photosSlice.actions;
export const photosReducer = photosSlice.reducer;
