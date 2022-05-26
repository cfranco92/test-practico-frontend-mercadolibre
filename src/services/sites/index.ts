import { createApi } from "@reduxjs/toolkit/query/react";
import { Product } from "../../models/product";
import { SITES_API } from "../../constants";
import { Search } from "../../models/search";
import { apiBaseQuery } from "../base";

interface FetchProductQueryParams {
  query: string;
}
interface FetchSearchByCategoryQueryParams {
  categoryId: string;
}

interface SiteData {
  filters: CategoryData[];
  results: ItemData[];
}

interface ItemData {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  thumbnail: string;
  condition: string;
  shipping: { free_shipping: boolean };
}

interface CategoryData {
  values: CategoryDataValue[];
}

interface CategoryDataValue {
  name: string;
}

export const sitesApi = createApi({
  reducerPath: "sitesApi",
  baseQuery: apiBaseQuery(SITES_API),
  tagTypes: ["Sites"],
  endpoints(builder) {
    return {
      fetchSearch: builder.query<Product, FetchProductQueryParams>({
        query: (queryParams) => ({
          url: `/MLA/search?q=${queryParams.query}`,
          method: "GET",
        }),
        providesTags: ["Sites"],
        transformResponse: (data: SiteData) => {
          return sitesFromData(data);
        },
      }),
      fetchSearchByCategory: builder.query<
        any,
        FetchSearchByCategoryQueryParams
      >({
        query: (queryParams) => ({
          url: `/MLA/search?category=${queryParams.categoryId}`,
          method: "GET",
        }),
        providesTags: ["Sites"],
        transformResponse: (data: any) => {
          return categoriesFromData(data.filters);
        },
      }),
    };
  },
});

function sitesFromData(data: SiteData) {
  const site: Search = {
    author: {
      name: "Cristian",
      lastname: "Franco",
    },
    categories: categoriesFromData(data.filters),
    items: data.results.map((item: ItemData) => itemFromData(item)).slice(0, 4),
  };
  return site;
}

function categoriesFromData(filters: CategoryData[]) {
  let categories: string[] = [];
  filters.forEach((filter) => {
    filter.values.forEach((value) => categories.push(value.name));
  });
  return categories;
}

function itemFromData(item: ItemData) {
  return {
    id: item.id,
    title: item.title,
    price: {
      amount: item.price,
      currency: item.currency_id,
      decimals: undefined,
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
  };
}

export const { useFetchSearchQuery } = sitesApi;
