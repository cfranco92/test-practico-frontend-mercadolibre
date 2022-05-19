import { combineReducers } from "@reduxjs/toolkit";
import { itemsApi } from "../services/items";
import productReducer from "./product";
import { sitesApi } from "../services/sites";

const rootReducer = combineReducers({
  product: productReducer,
  [itemsApi.reducerPath]: itemsApi.reducer,
  [sitesApi.reducerPath]: sitesApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
