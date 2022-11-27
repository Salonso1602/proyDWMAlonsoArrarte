import { Component, OnInit } from '@angular/core';
import { INews } from '@interfaces/news';
import { NewsService } from '@services/news.service';
import { Observable } from 'rxjs';
import { newsTypes } from '@enums/newsTypes';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  news$: Observable<INews[]>;
  
  newsTypes = newsTypes;

  constructor(
    private newsService: NewsService
  ) {
    this.news$ = this.newsService.getNews();
  }

  ngOnInit(): void {
  }

  newsHasDetails(news: INews) {
    return news.type !== newsTypes.Food;
  }
}
