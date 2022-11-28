import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DaysOfWeek, getDayName } from '@enums/days-of-week';
import { IActivity } from '@interfaces/activity';

@Component({
  selector: 'app-activity-booking-detail',
  templateUrl: './activity-booking-detail.component.html',
  styleUrls: ['./activity-booking-detail.component.scss']
})
export class ActivityBookingDetailComponent implements OnInit {
  @Input() activity!: IActivity;
  @Input() priceControl!: FormControl;

  constructor() { }

  ngOnInit(): void {
    if (!this.priceControl) {
      throw new Error('priceControl is required in ActivityBookingDetailComponent');
    }
  }

  getDayName(day: DaysOfWeek): string {
    return getDayName(day);
  }
}
