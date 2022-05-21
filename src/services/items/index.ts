import { ITEMS_API } from "../../constants";
import { Product } from "../../models/product";
import { apiBaseQuery } from "../base";
import { createApi } from "@reduxjs/toolkit/query/react";

interface FetchProductQueryParams {
  id: string;
}

export const itemsApi = createApi({
  reducerPath: "itemsApi",
  baseQuery: apiBaseQuery(ITEMS_API),
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
