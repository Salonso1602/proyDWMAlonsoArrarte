import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() hotelName? : string;
  
  constructor() { }

  ngOnInit(): void {
    this.hotelName = "Duncan Hill Hotel";
  }

}
