import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IlittleHotel } from '@interfaces/IlittleHotel';
import { HotelService } from '@services/hotel.service';

@Component({
  selector: 'app-select-hotel',
  templateUrl: './select-hotel.component.html',
  styleUrls: ['./select-hotel.component.scss']
})
export class SelectHotelComponent implements OnInit {

  hotels? : IlittleHotel[];

  constructor(private hs : HotelService, private router : Router) { }

  ngOnInit(): void {
    this.hs.getAllHotels().subscribe(allHotels => this.hotels = allHotels);
    this.hs.clearSelectedHotel();
  }

  selectHotel(hotelid : string){
    this.hs.getAndSelectHotel(hotelid).subscribe(
      hotel => this.router.navigate(['/home'])
    )

  }

}
