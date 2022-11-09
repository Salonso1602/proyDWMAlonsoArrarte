import { Component, OnInit, Input } from '@angular/core';
import { IBookable } from '@interfaces/bookable';
import { IActivity } from '@interfaces/activity';
import { IEvent } from '@interfaces/event';
import { INews } from '@interfaces/news';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  @Input() card! : INews;
  eventCard? : IEvent;
  activityCard? : IActivity;

  constructor() { }

  ngOnInit(): void {

  }

}
