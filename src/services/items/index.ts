import { ITEMS_API } from "../../constants";
import { ProductDetail } from "../../models/product";
import { apiBaseQuery } from "../base";
import { createApi } from "@reduxjs/toolkit/query/react";

interface FetchProductQueryParams {
  productId: string;
}

export const itemsApi = createApi({
  reducerPath: "itemsApi",
  baseQuery: apiBaseQuery(ITEMS_API),
  tagTypes: ["Items"],
  endpoints(builder) {
    return {
      fetchProductAndDescription: builder.query<
        ProductDetail,
        FetchProductQueryParams
      >({
        async queryFn(queryParams, queryApi, extraOptions, baseQuery) {
          const productResponse: any = await baseQuery({
            url: `/${queryParams.productId}`,
          });

          if (productResponse.error) {
            return { error: productResponse.error };
          }

          const productDescriptionResponse: any = await baseQuery({
            url: `/${queryParams.productId}/description`,
          });

          if (productDescriptionResponse.error) {
            return { error: productDescriptionResponse.error };
          }

          const response = {
            author: {
              name: "Cristian",
              lastname: "Franco",
            },
            item: {
              id: productResponse?.data.id,
              title: productResponse?.data.title,
              price: {
                amount: productResponse?.data.price,
                currency: productResponse?.data.currency_id,
                decimals: undefined,
              },
              picture: productResponse?.data.thumbnail,
              condition: productResponse?.data.condition,
              free_shipping: productResponse?.data.shipping.free_shipping,
              description: productDescriptionResponse?.data.plain_text,
            },
            categoryId: productResponse?.data.category_id,
          };

          return {
            data: response,
          };
        },
        providesTags: ["Items"],
      }),
    };
  },
});

export const { useFetchProductAndDescriptionQuery } = itemsApi;
