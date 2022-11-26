import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHotel } from '@interfaces/hotel';
import { IlittleHotel } from '@interfaces/IlittleHotel';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  url = `${environment.apiBaseUrl}/hotels`

  allHotels?: IHotel[];
  selectedHotel$ = new BehaviorSubject<IHotel | undefined>(undefined);

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

  getAllHotels() : Observable<IlittleHotel[]>{
    return this.http.get<IlittleHotel[]>(this.url);
  }

  getAndSelectHotel(hotelId : string){
    this.http.get<IHotel>(this.url + '/' + hotelId).subscribe(hotel =>{
      this.selectHotel(hotel);
    })
  }

  hasSelectedHotel = localStorage.getItem('hotel_id') !== null;
}
