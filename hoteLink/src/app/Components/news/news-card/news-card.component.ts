import { Component, OnInit } from '@angular/core';
import { INews } from '@interfaces/news';
import { NewsService } from '@services/news.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  latestNews?: INews[]; 

  constructor(
    private _newsService: NewsService
  ) { }

  ngOnInit(): void {
    this._newsService.getNews().subscribe(data => {
      this.latestNews = data;
    })
  }

}
