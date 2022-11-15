import { Component, OnInit, Input } from '@angular/core';
import { IHotel } from '@interfaces/hotel';
import { HotelService } from '@services/hotel.service';

@Component({
  selector: 'app-more-info-card',
  templateUrl: './more-info-card.component.html',
  styleUrls: ['./more-info-card.component.scss']
})
export class MoreInfoCardComponent implements OnInit {

  hotel? : IHotel;

  constructor(private hs : HotelService) { }

  ngOnInit(): void {
    this.getHotel();
  }

  getHotel(){
    this.hs.selectedHotel$.subscribe(hotel => this.hotel = hotel);
  }
}

