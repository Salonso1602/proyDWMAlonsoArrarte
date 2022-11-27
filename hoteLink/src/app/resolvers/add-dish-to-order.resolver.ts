import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { IDish } from '@interfaces/dish';
import { RestaurantService } from '@services/restaurant.service';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddDishToOrderResolver implements Resolve<IDish | undefined> {

  constructor(private restaurantService: RestaurantService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IDish | undefined> {
    const dishId = route.paramMap.get('id');
    if (!dishId) {
      return of(undefined);
    }

    return this.restaurantService.getById(+dishId);
  }
}