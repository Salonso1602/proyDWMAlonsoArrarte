import { Component, Input, OnInit } from '@angular/core';
import { Modals } from '@components/modals/modals';
import { HotelService } from '@services/hotel.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() hotelName? : string;
  modals = Modals;
  
  constructor(private hs : HotelService) { }

  ngOnInit(): void {
    this.hs.selectedHotel$.subscribe(hotel => this.hotelName = hotel?.name)
  }

}
