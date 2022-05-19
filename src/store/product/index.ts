import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Product } from "../../models/product";
import { RootState } from "..";

export interface InitialAccountStateProps {
  product: Product | undefined;
}

const initialState: InitialAccountStateProps = {
  product: undefined,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<Product>) => {
      return {
        ...state,
        product: action.payload,
      };
    },
  },
});

export const { setProduct } = productSlice.actions;
export const productSelector = (state: RootState) => state.product;

export default productSlice.reducer;
