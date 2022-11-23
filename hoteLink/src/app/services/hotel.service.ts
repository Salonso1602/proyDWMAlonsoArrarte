import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHotel } from '@interfaces/hotel';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  url = `${environment.apiBaseUrl}/hotels`

  allHotels?: IHotel[];
  selectedHotel$ = new BehaviorSubject<IHotel | undefined>(
    {
      id: '0',
      name : 'messihotel',
      location : {
        id: '0',
        name : 'messicasa',
        longDescription: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
        shortDescription: 'cortaDesc'
        },
      address : 'avitalia',
      attentionHours : '18',
      contactInfo : '032193129132',
      longDescription: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      shortDescription: 'cortaDesc'
    });

  constructor(
    private http: HttpClient,
  ) {
    this.http.get<IHotel[]>(`http://localhost:3000/hotels`)
      .pipe(
        tap(hotels => this.allHotels = hotels),
        tap(hotels => this.selectedHotel$.next(hotels[0]))
      );
  }

  selectHotel(hotel: IHotel) {
    this.selectedHotel$.next(hotel);
  }

}
