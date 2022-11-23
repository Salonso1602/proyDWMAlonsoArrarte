import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HotelService } from '@services/hotel.service';

@Injectable()
export class HotelPersistanceInterceptor implements HttpInterceptor {

  constructor(private hs: HotelService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const savedHotelId = localStorage.getItem('hotel_id');

    if (savedHotelId) {
      const cloned = request.clone({
        headers: request.headers.set('Hotel', `${savedHotelId}`)
      });

      return next.handle(cloned);
    }
    else {
      const hotel = this.hs.selectedHotel$.value;
      if (hotel) {
        localStorage.setItem('hotel_id', hotel.id);

        const cloned = request.clone({
          headers: request.headers.set('Hotel', `${hotel.id}`)
        });

        return next.handle(cloned);
      }

      return next.handle(request);
    }
  }
}
