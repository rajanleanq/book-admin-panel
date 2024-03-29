import { endpoints } from "@/constants/endpoints";
import { protectedBaseQuery } from "@/store/baseQuery/protected.baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  baseQuery: protectedBaseQuery,
  reducerPath: "userApi",
  tagTypes: ["User"],
  endpoints: (build) => ({
    getAllUser: build.query({
      query: () => ({
        url: endpoints.admin?.getUser,
        method: "get",
      }),
      providesTags: ["User"],
    }),
  }),
});
export const {
  useGetAllUserQuery,
} = userApi;
