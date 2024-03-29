import { baseURL } from "@/constants/endpoints";
import { prepareProtectedHeader } from "@/core/lib/prepare.header";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

 export const protectedBaseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  prepareHeaders: prepareProtectedHeader,
});
