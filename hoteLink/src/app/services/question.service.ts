import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INews } from '@interfaces/news';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private static readonly _apiUrl = `${environment.apiBaseUrl}`;

  constructor(
    private http: HttpClient
  ) { }

  sendActivityQuestion(activityId : string, questionText : string) {
    return this.http.post(QuestionService._apiUrl + '/activities/' + activityId + '/questions', {question : questionText});
  }

  sendEventQuestion(eventId : string, questionText : string) {
    return this.http.post(QuestionService._apiUrl + '/events/' + eventId + '/questions', {question : questionText});
  }
}
