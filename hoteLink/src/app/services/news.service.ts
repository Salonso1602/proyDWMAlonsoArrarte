import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INews } from '@interfaces/news';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private static readonly _apiUrl = `${environment.apiBaseUrl}/news`;

  constructor(
    private http: HttpClient
  ) { }

  getNews(): Observable<INews[]> {
    return this.http.get<INews[]>(NewsService._apiUrl);
  }
}
