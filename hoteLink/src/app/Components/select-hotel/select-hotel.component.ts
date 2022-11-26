import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { IHotel } from '@interfaces/hotel';
import { IlittleHotel } from '@interfaces/IlittleHotel';
import { HotelService } from '@services/hotel.service';

@Component({
  selector: 'app-select-hotel',
  templateUrl: './select-hotel.component.html',
  styleUrls: ['./select-hotel.component.scss']
})
export class SelectHotelComponent implements OnInit {

  hotels? : IlittleHotel[];

  hotelForm = new FormControl('', Validators.required)

  constructor(private hs : HotelService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.hs.getAllHotels().subscribe(allHotels => this.hotels = allHotels);
  }

  selectHotel(){
    if(this.hotelForm.value){
    this.hs.getAndSelectHotel(this.hotelForm.value);}
  }

}
