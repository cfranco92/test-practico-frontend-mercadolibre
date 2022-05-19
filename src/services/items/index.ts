import { Product } from "../../models/product";
import { apiBaseQuery } from "../base";
import { createApi } from "@reduxjs/toolkit/query/react";
import { itemAPI } from "../../constants";

interface FetchProductQueryParams {
  id: string;
}

export const itemsApi = createApi({
  reducerPath: "itemsApi",
  baseQuery: apiBaseQuery(itemAPI),
  tagTypes: ["Items"],
  endpoints(builder) {
    return {
      fetchProduct: builder.query<Product, FetchProductQueryParams>({
        query: (queryParams) => ({
          url: `/${queryParams.id}`,
          method: "GET",
          data: {},
        }),
        providesTags: ["Items"],
      }),
      fetchProductDescription: builder.query<Product, FetchProductQueryParams>({
        query: (queryParams) => ({
          url: `/${queryParams.id}/description`,
          method: "GET",
          data: {},
        }),
        providesTags: ["Items"],
      }),
    };
  },
});

export const { useFetchProductQuery } = itemsApi;
