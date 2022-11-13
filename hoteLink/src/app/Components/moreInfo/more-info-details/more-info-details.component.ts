import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IHotel } from '@interfaces/hotel';
import { ILocation } from '@interfaces/location';
import { HotelService } from '@services/hotel.service';

@Component({
  selector: 'app-more-info-details',
  templateUrl: './more-info-details.component.html',
  styleUrls: ['./more-info-details.component.scss']
})
export class MoreInfoDetailsComponent implements OnInit {

  detailed? : IHotel | ILocation;
  detailedId? : string;
  headerText? : string;

  constructor(private route: Router, private hs : HotelService) { }

  ngOnInit(): void {
    this.getInstance();
  }

  getInstance() {
    const currentURL = this.route.url.split('/');
    this.detailedId = currentURL[currentURL.indexOf('details') - 1];

    switch(currentURL[currentURL.indexOf('details') - 2]){
      case 'location':
        //this.ls.getLocationById(this.detailedId).subscribe(res => this.detailed = res);
        this.headerText = 'Sobre Nuestra Casa';
        break;
      case 'hotel':
        this.hs.selectedHotel$.subscribe(res => this.detailed = res);
        this.headerText = 'Sobre Nosotros';
        break;
    }    
  }

}
