import { Component, OnInit } from '@angular/core';
import { IHotel } from '@interfaces/hotel';
import { HotelService } from '@services/hotel.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentHotel? : IHotel;

  constructor(private hs : HotelService) { }

  ngOnInit(): void {
    this.hs.selectedHotel$.subscribe(hotel => this.currentHotel = hotel);
  }

}
