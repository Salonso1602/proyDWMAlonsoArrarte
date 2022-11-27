import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookableDetailsComponent } from '@components/news/bookable-details/bookable-details.component';
import { NewsListComponent } from '@components/news/news-list/news-list.component';
import { MoreInfoDetailsComponent } from '@components/moreInfo/more-info-details/more-info-details.component';
import { BookingComponent } from '@components/booking/booking.component';
import { MoreInfoCardComponent } from '@components/moreInfo/more-info-card/more-info-card.component';
import { RequestServicesComponent } from '@components/request-services/request-services.component';
import { RestaurantComponent } from '@components/restaurant/restaurant.component';
import { BookablesListComponent } from '@components/booking/bookables-list/bookables-list.component';
import { NeedsSelectedHotel } from './guards/needs-selected-hotel.service';
import { SelectHotelComponent } from '@components/select-hotel/select-hotel.component';
import { AddDishToOrderResolver } from './resolvers/add-dish-to-order.resolver';

const routes: Routes = [
  {
    path: '',
    component: SelectHotelComponent
  },
  {
    path: 'home',
    canActivate : [NeedsSelectedHotel],
    component: NewsListComponent
  },
  {
    path: 'aboutUs',
    canActivate : [NeedsSelectedHotel],
    component: MoreInfoCardComponent
  },
  {
    path: 'requestService',
    canActivate : [NeedsSelectedHotel],
    component: RequestServicesComponent
  },
  {
    path: 'event/:id/details',
    canActivate : [NeedsSelectedHotel],
    component: BookableDetailsComponent
  },
  {
    path: 'activity/:id/details',
    canActivate : [NeedsSelectedHotel],
    component: BookableDetailsComponent
  },
  {
    path: 'hotel/:id/details',
    canActivate : [NeedsSelectedHotel],
    component: MoreInfoDetailsComponent
  },
  {
    path: 'location/:id/details',
    canActivate : [NeedsSelectedHotel],
    component: MoreInfoDetailsComponent
  },
  {
    path: 'activity/:id/booking',
    canActivate : [NeedsSelectedHotel],
    component: BookingComponent
  },
  {
    path: 'event/:id/booking',
    canActivate : [NeedsSelectedHotel],
    component: BookingComponent
  },
  {
    path: 'restaurant',
    canActivate : [NeedsSelectedHotel],
    children: [
      {
        path: '',
        component: RestaurantComponent
      },
      {
        path: 'addToOrder/:id',
        component: RestaurantComponent,
        resolve: {
          dishFromNews: AddDishToOrderResolver
        }
      }
    ]
  },
  {
    path: 'activitiesAndEvents',
    canActivate : [NeedsSelectedHotel],
    component: BookablesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
