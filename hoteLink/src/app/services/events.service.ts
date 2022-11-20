import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEvent } from '@interfaces/event';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  static readonly eventsUrl = `${environment.apiBaseUrl}/events`;

  constructor(
    private http: HttpClient
  ) {}

  getById(id: string): Observable<IEvent> {
    return this.http.get<IEvent>(`${EventsService.eventsUrl}/${id}`);
  }
}
