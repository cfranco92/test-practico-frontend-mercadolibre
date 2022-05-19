import { Product } from "../../models/product";
import { apiBaseQuery } from "../base";
import { createApi } from "@reduxjs/toolkit/query/react";
import { sitesAPI } from "../../constants";

interface FetchProductQueryParams {
  query: string;
}

export const sitesApi = createApi({
  reducerPath: "sitesApi",
  baseQuery: apiBaseQuery(sitesAPI),
  tagTypes: ["Sites"],
  endpoints(builder) {
    return {
      fetchSearch: builder.query<Product, FetchProductQueryParams>({
        query: (queryParams) => ({
          url: `/MLA/search?q=${queryParams.query}`,
          method: "GET",
          data: {},
        }),
        providesTags: ["Sites"],
      }),
    };
  },
});

export const { useFetchSearchQuery } = sitesApi;
