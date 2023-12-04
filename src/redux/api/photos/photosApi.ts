import { baseApi } from "../baseApi";
import { tagTypes } from "../tagTypes";

const photosApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllPhotos: build.query({
      query: () => ({
        url: `/photos`,
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return response.data;
      },
      providesTags: [tagTypes.photos],
    }),
  }),
});

export const { useGetAllPhotosQuery } = photosApi;
