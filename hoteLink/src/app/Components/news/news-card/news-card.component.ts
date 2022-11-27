import { Component, Input, OnInit } from '@angular/core';
import { IActivity } from '@interfaces/activity';
import { IDish } from '@interfaces/dish';
import { IEvent } from '@interfaces/event';
import { INews } from '@interfaces/news';
import { NewsService } from '@services/news.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input() news!: INews;

  constructor(
    private _newsService: NewsService
  ) { }

  ngOnInit(): void {
  }

  isActivityNews(subject: IActivity | IDish | IEvent): subject is IActivity {
    return (subject as IActivity).weeklyPrice !== undefined;
  }
  
  isDishNews(subject: IActivity | IDish | IEvent): subject is IDish {
    return (subject as IDish).serviceTime !== undefined;
  }

  isEventNews(subject: IActivity | IDish | IEvent): subject is IEvent {
    return (subject as IEvent).entranceFee !== undefined;
  }
}
