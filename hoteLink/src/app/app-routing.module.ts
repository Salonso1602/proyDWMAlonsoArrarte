import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsCardComponent } from '@components/news/news-card/news-card.component';
import { NewsDetailsComponent } from '@components/news/news-details/news-details.component';
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
    path: 'newsDetails/:id',
    component: NewsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
