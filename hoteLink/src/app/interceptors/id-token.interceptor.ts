import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable()
export class IdTokenInterceptor implements HttpInterceptor {

  constructor(
    private authService: LoginService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const idToken = localStorage.getItem('id_token');

    if (idToken !== null) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${idToken}`)
      });

      return next.handle(cloned); 
    }
    else {
      return next.handle(request);
    }
  }
}
