import { baseApi } from "../baseApi";
import { tagTypes } from "../tagTypes";

const postApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllPosts: build.query({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return response.data;
      },
      providesTags: [tagTypes.post],
    }),
  }),
});

export const { useGetAllPostsQuery } = postApi;
