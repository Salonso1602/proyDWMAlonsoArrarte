import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IImage } from '@interfaces/image';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private static readonly _imagesApiUrl = `${environment.apiBaseUrl}/images`;

  constructor(
    private http: HttpClient
  ) { }

  getImageById(id: string): Observable<IImage> {
    return this.http.get<IImage>(`${MediaService._imagesApiUrl}/${id}`);
  }
}
