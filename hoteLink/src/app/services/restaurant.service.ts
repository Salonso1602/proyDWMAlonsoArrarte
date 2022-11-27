import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchFilter } from '@components/search/search-filter/search-filter';
import { RetrievedItem, SearchService } from '@components/search/search-service';
import { ICategory } from '@interfaces/category';
import { IDish } from '@interfaces/dish';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService implements SearchService<IDish> {
  static readonly restaurantUrl = `${environment.apiBaseUrl}/restaurant`;

  readonly currentOrder: (IDish & {quantity: number})[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getByFilter(filter: SearchFilter): Observable<RetrievedItem<IDish>[]> {
    const queryParams =
      `search=${filter.searchText}&categories=${filter.categories.map(category => category.id).join(',')}`;

    return this.http.get<IDish[]>(`${RestaurantService.restaurantUrl + '/dishes'}?${queryParams}`)
      .pipe(
        map(retrievedItems => {
          return retrievedItems.map(retrievedItem => {
            return {
              item: retrievedItem,
              cardTitle: retrievedItem.name,
              cardDescription: retrievedItem.description,
              detailsRouterLink: ['/dishes', retrievedItem.id.toString()]
            }
          })
        })
      );
  }

  getById(id: number): Observable<IDish> {
    return this.http.get<IDish>(`${RestaurantService.restaurantUrl + '/dishes'}/${id}`);
  }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${RestaurantService.restaurantUrl}/dishes/categories`);
  }

  addDishToCurrentOrder(dish: IDish): void {
    const existingDish = this.currentOrder.find(orderItem => orderItem.id === dish.id);
    if (existingDish) {
      existingDish.quantity++;
    } else {
      this.currentOrder.push({ ...dish, quantity: 1 });
    }
  }
}
