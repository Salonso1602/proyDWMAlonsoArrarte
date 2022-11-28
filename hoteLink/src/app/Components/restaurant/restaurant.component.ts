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
  currentOrder: readonly (IDish & {quantity: number})[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {
    this.currentOrder = restaurantService.currentOrder;
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ dishFromNews }) => {
      if (dishFromNews) {
        this.restaurantService.addDishToCurrentOrder(dishFromNews);
      }
      console.log(JSON.stringify(this.restaurantService.currentOrder));
    })
  }

  showOrderItems(): void {
    let text = 'Esta es tu orden hasta ahora: \n\n';
    text += this.currentOrder.map(dish => {
        return `${dish.quantity} x ${dish.name}`;
      }).join('\n')

    alert(text);
  }

  orderItemsCount(): number {
    return this.currentOrder.reduce((count, dish) => count + dish.quantity, 0);
  }
}
