import { Component, OnInit, Input } from '@angular/core';
import { IBookable } from '@interfaces/bookable';
import { IActivity } from '@interfaces/activity';
import { IEvent } from '@interfaces/event';
import { INews } from '@interfaces/news';
import { Router } from '@angular/router';
import { NewsService } from '@services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  cardId?: number;
  card?: INews;

  eventCard?: IEvent;
  activityCard?: IActivity;

  constructor(private route: Router, private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.getCard();
  }

  getCard() {
    const currentURL = this.route.url.split('/');
    this.cardId = parseInt(currentURL[currentURL.indexOf('newsDetails') + 1]);

    this.newsService.getNews().subscribe(newCards => {
      newCards.forEach(element => {
        if (element.id === this.cardId) {
          this.card = element;
          return;
        }
      });
    }
    )
  }
}
