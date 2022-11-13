import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IActivity } from '@interfaces/activity';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  static readonly activitiesUrl = `${environment.apiBaseUrl}/activities`;

  constructor(
    private http: HttpClient
  ) {}

  getById(id: string): Observable<IActivity> {
    return this.http.get<IActivity>(`${ActivitiesService.activitiesUrl}/${id}`);
  }
}
