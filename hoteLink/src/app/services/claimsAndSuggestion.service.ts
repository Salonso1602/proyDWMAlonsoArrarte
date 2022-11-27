import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClaimsAndSuggestionsService {
  private static readonly _apiUrl = `${environment.apiBaseUrl}/claimsAndSuggestions`;

  constructor(
    private http: HttpClient
  ) { }

  sendActivityQuestion(requestText : string) : Observable<object>{
    return this.http.post(ClaimsAndSuggestionsService._apiUrl, {requestText : requestText});
  }

}
