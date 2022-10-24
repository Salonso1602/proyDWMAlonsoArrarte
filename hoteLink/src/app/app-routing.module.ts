import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsCardComponent } from '@components/news/news-card/news-card.component';
import { BookableDetailsComponent } from '@components/news/bookable-details/bookable-details.component';
import { NewsListComponent } from '@components/news/news-list/news-list.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
