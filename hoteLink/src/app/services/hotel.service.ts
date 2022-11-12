import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHotel } from '@interfaces/hotel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  url = 'http:localhost:3000/api/v1/hotels'

  selectedHotelId : string = '0';
  selectedHotel? : Observable<IHotel> = new Observable((subscriber)=>
  {
    this.http.get<IHotel>(this.url + '/' + this.selectedHotelId).subscribe(res => subscriber.next(res));
    
  });

  constructor(private http : HttpClient) { }

}
