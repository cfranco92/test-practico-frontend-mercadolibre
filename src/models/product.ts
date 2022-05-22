import { Author } from "./author";
import { Item } from "./item";

export interface Product {
  author: Author;
  categories: string[];
  items: Item[];
}

export interface ProductDetail {
  author: Author;
  item: Item;
  categoryId: string;
}
