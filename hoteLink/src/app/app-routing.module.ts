import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsCardComponent } from '@components/news/news-card/news-card.component';
import { BookableDetailsComponent } from '@components/news/bookable-details/bookable-details.component';
import { NewsListComponent } from '@components/news/news-list/news-list.component';
import { MoreInfoDetailsComponent } from '@components/moreInfo/more-info-details/more-info-details.component';

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
