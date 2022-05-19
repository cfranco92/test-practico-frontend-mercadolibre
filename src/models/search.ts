import { Author } from "./author";
import { Item } from "./item";

export interface Search {
  author: Author;
  categories: String[];
  items: Item[];
}
