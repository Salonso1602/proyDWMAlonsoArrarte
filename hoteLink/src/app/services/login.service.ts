import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as moment from "moment";
import { HotelService } from './hotel.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = `${environment.apiBaseUrl}/auth/login`

  constructor(private http: HttpClient, private hs: HotelService) { }

  authUser(email: string, password: string): Observable<ikey> {
    return this.http.post<ikey>(this.url, { email, password })
      .pipe(
        tap(resp => {
          this.setSession(resp);
        })
      );
  }


  private setSession(authResult: ikey) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));

  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration ? expiration : '0');
    return moment(expiresAt);
  }
}

interface ikey {
  idToken: string,
  expiresIn: string
}