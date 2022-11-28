import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modals } from '@components/modals/modals';
import { HotelService } from '@services/hotel.service';
import { LoginService } from '@services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() hotelName? : string;
  loggedIn = this.ls.isLoggedIn();
  modals = Modals;
  
  constructor(private hs : HotelService, private ls : LoginService, private router : Router) { }

  ngOnInit(): void {
    this.hs.selectedHotel$.subscribe(hotel => this.hotelName = hotel?.name)
    this.ls.hasLoggedInEvent.asObservable().subscribe(isLogged => this.loggedIn = isLogged)
  }

  logOut(){
    this.ls.logout();
  }
}
