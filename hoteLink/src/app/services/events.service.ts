import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '@interfaces/category';
import { IEvent } from '@interfaces/event';
import { RetrievedItem, SearchService } from '@components/search/search-service';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchFilter } from '@components/search/search-filter/search-filter';

@Injectable({
  providedIn: 'root'
})
export class EventsService implements SearchService<IEvent> {
  static readonly eventsUrl = `${environment.apiBaseUrl}/events`;

  constructor(
    private http: HttpClient
  ) {}

  getById(id: string): Observable<IEvent> {
    return this.http.get<IEvent>(`${EventsService.eventsUrl}/${id}`);
  }

  getByFilter(filter: SearchFilter): Observable<RetrievedItem<IEvent>[]> {
    const queryParams =
      `search=${filter.searchText}&categories=${filter.categories.map(category => category.id).join(',')}`;

    return this.http.get<IEvent[]>(`${EventsService.eventsUrl}?${queryParams}`)
      .pipe(
        map(retrievedItems => {
          return retrievedItems.map(retrievedItem => {
            return {
              item: retrievedItem,
              detailsRouterLink: ['/events', retrievedItem.id.toString()]
            }
          })
        })
      );
  }
}
