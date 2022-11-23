import { ICategory } from "@interfaces/category";

export interface SearchFilter {
  searchText: string;
  categories: ICategory[];
}