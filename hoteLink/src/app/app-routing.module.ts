import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookableDetailsComponent } from '@components/news/bookable-details/bookable-details.component';
import { NewsListComponent } from '@components/news/news-list/news-list.component';
import { MoreInfoDetailsComponent } from '@components/moreInfo/more-info-details/more-info-details.component';
import { MoreInfoCardComponent } from '@components/moreInfo/more-info-card/more-info-card.component';
import { RequestServicesComponent } from '@components/request-services/request-services.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: NewsListComponent
  },
  {
    path: 'aboutUs',
    component: MoreInfoCardComponent
  },
  {
    path: 'requestService',
    component: RequestServicesComponent
  },
  {
    path: 'event/:id/details',
    component: BookableDetailsComponent
  },
  {
    path: 'activity/:id/details',
    component: BookableDetailsComponent
  },
  {
    path: 'hotel/:id/details',
    component: MoreInfoDetailsComponent
  },
  {
    path: 'location/:id/details',
    component: MoreInfoDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
