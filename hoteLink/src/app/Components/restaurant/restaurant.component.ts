import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDish } from '@interfaces/dish';
import { RestaurantService } from '@services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ dishFromNews }) => {
      if (dishFromNews) {
        this.restaurantService.addDishToCurrentOrder(dishFromNews);
      }
    })
  }
}
