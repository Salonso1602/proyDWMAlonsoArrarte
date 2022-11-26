import { Component, OnInit } from '@angular/core';
import { newsTypes } from '@enums/newsTypes';
import { INews } from '@interfaces/news';
import { Router } from '@angular/router';
import { NewsService } from '@services/news.service';

@Component({
  selector: 'app-bookable-details',
  templateUrl: './bookable-details.component.html',
  styleUrls: ['./bookable-details.component.scss']
})
export class BookableDetailsComponent implements OnInit {

  cardId?: number;
  cardType?: newsTypes;
  types = newsTypes;
  card?: INews;

  constructor(private route: Router, private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.getCard();
  }

  getCard() {
    const currentURL = this.route.url.split('/');
    this.cardId = parseInt(currentURL[currentURL.indexOf('details') - 1]);

    switch(currentURL[currentURL.indexOf('details') - 2]){
      case 'event':
        this.cardType = newsTypes.Event;
        break;
      case 'activity':
        this.cardType = newsTypes.Activity;
        break;
    }    

    this.newsService.getNews().subscribe(newCards => {
      newCards.forEach(element => {
        if (element.type === this.cardType && element.subject.id === this.cardId) {
          this.card = element;
          return;
        }
      });
    }
    )
  }
}
