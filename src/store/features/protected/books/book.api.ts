import { endpoints } from "@/constants/endpoints";
import { protectedBaseQuery } from "@/store/baseQuery/protected.baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  baseQuery: protectedBaseQuery,
  reducerPath: "bookApi",
  tagTypes: ["Book"],
  endpoints: (build) => ({
    addBook: build.mutation<any, any>({
      query: (data: any) => ({
        url: endpoints.admin?.addBook,
        body: data?.data,
        method: "POST",
      }),
      invalidatesTags: ["Book"],
    }),
    getAllBooks: build.query({
      query: ({ limit, page }: any) => ({
        url: endpoints.admin.getAllBooks(page, limit),
        method: "get",
      }),
      providesTags: ["Book"],
    }),
    getSingleBook: build.query({
      query: (id: string) => ({
        url: endpoints?.admin?.getAllBooks + "/" + id,
        method: "get",
      }),
    }),
    bookUpdate: build.mutation<any, any>({
      query: ({ id, data }: { id: string | number; data: any }) => ({
        url: endpoints?.admin?.getAllBooks + "/" + id,
        body: data?.data,
        method: "PATCH",
      }),
      invalidatesTags: ["Book"],
    }),
    bookDelete: build.mutation<any, any>({
      query: ({ id }: { id: string | number }) => ({
        url: endpoints?.admin?.getAllBooks + "/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["Book"],
    }),
  }),
});
export const {
  useAddBookMutation,
  useBookDeleteMutation,
  useGetSingleBookQuery,
  useBookUpdateMutation,
  useGetAllBooksQuery,
} = bookApi;
