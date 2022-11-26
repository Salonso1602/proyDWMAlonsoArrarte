import { Component, OnInit } from '@angular/core';
import { Modals } from '@components/modals/modals';
import { categoryTypes } from '@enums/categoryTypes';
import { IHotel } from '@interfaces/hotel';
import { HotelService } from '@services/hotel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hoteLink';
  modals = Modals;
  categories = categoryTypes;
  hasSelectedHotel? : IHotel;

  constructor(private hs : HotelService){}

  ngOnInit() : void{
    this.hs.selectedHotel$.subscribe(hotel => this.hasSelectedHotel = hotel)
  }
}
