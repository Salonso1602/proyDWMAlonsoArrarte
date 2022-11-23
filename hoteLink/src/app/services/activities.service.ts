import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IActivity } from '@interfaces/activity';
import { ICategory } from '@interfaces/category';
import { RetrievedItem, SearchService } from '@components/search/search-service';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchFilter } from '@components/search/search-filter/search-filter';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService implements SearchService<IActivity> {
  static readonly activitiesUrl = `${environment.apiBaseUrl}/activities`;

  constructor(
    private http: HttpClient
  ) {}

  getById(id: string): Observable<IActivity> {
    return this.http.get<IActivity>(`${ActivitiesService.activitiesUrl}/${id}`);
  }

  getByFilter(filter: SearchFilter): Observable<RetrievedItem<IActivity>[]> {
    const queryParams =
      `search=${filter.searchText}&categories=${filter.categories.map(category => category.id).join(',')}`;
      
    return this.http.get<IActivity[]>(`${ActivitiesService.activitiesUrl}?${queryParams}`)
      .pipe(
        map(retrievedItems => {
          return retrievedItems.map(retrievedItem => {
            return {
              item: retrievedItem,
              cardTitle: retrievedItem.name,
              cardDescription: retrievedItem.description,
              detailsRouterLink: ['/activities', retrievedItem.id.toString()]
            }
          })
        })
      );
  }
}
