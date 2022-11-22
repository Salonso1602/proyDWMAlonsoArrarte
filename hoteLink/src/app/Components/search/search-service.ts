import { Observable } from "rxjs";
import { SearchFilter } from "./search-filter/search-filter";

export interface SearchService<T> {
  getByFilter(filter: SearchFilter): Observable<RetrievedItem<T>[]>
}

export interface RetrievedItem<T> {
  item: T;
  detailsRouterLink: string[];
}