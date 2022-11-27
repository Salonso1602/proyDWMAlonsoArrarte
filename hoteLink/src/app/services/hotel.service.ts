import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
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
    
  }

  selectHotel(hotel: IHotel) {
    this.selectedHotel$.next(hotel);
  }

  getAllHotels(): Observable<IlittleHotel[]> {
    return this.http.get<IlittleHotel[]>(this.url);
  }

  getAndSelectHotel(hotelId: string): Observable<IHotel> {
    return this.http.get<IHotel>(this.url + '/' + hotelId).pipe(
      tap(hotel => {
        this.selectHotel(hotel);
        localStorage.setItem('hotel_id', hotelId);
      }))
  }

  getSavedHotel() {
    const hotelId = localStorage.getItem('hotel_id');
    if(hotelId){
      this.getAndSelectHotel(hotelId).subscribe();
    }
  }

  clearSelectedHotel() {
    localStorage.removeItem('hotel_id');
    this.selectedHotel$.next(undefined);
  }

  hasSelectedHotel = localStorage.getItem('hotel_id');
}
