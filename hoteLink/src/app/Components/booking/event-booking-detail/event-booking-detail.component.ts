import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from '@interfaces/event';

@Component({
  selector: 'app-event-booking-detail',
  templateUrl: './event-booking-detail.component.html',
  styleUrls: ['./event-booking-detail.component.scss']
})
export class EventBookingDetailComponent implements OnInit {
  @Input() event!: IEvent;

  constructor() { }

  ngOnInit(): void {
  }

}
