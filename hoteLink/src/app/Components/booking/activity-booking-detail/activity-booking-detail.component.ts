import { Component, Input, OnInit } from '@angular/core';
import { IActivity } from '@interfaces/activity';

@Component({
  selector: 'app-activity-booking-detail',
  templateUrl: './activity-booking-detail.component.html',
  styleUrls: ['./activity-booking-detail.component.scss']
})
export class ActivityBookingDetailComponent implements OnInit {
  @Input() activity!: IActivity;

  constructor() { }

  ngOnInit(): void {
  }

}
