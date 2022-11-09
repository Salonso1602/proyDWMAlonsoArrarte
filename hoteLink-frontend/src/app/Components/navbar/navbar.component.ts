import { Component, Input, OnInit } from '@angular/core';
import { Modals } from '@components/modals/modals';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() hotelName? : string;
  modals = Modals;
  
  constructor() { }

  ngOnInit(): void {
    this.hotelName = "Duncan Hill Hotel";
  }

}
