import { Component, OnInit } from '@angular/core';
import { INews } from '@interfaces/news';
import { NewsService } from '@services/news.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  news$: Observable<INews[]>;

  constructor(
    private newsService: NewsService
  ) {
    this.news$ = this.newsService.getNews();
  }

  ngOnInit(): void {
  }

}
