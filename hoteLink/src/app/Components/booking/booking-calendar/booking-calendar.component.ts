import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DaysOfWeek, getDayName, NumberOfDays } from '@enums/days-of-week';
import { TimeOfActivity } from '@interfaces/activity';
import { NgbDate, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { toNgbDate } from '@utils/date';

@Component({
  selector: 'app-booking-calendar',
  templateUrl: './booking-calendar.component.html',
  styleUrls: ['./booking-calendar.component.scss']
})
export class BookingCalendarComponent implements OnInit, AfterViewInit {
  @Input() date?: Date;
  @Input() times?: TimeOfActivity[];

  get selectedDate(): Date {
    return this.nativeSelectedDate;
  }

  set selectedDate(date: Date) {
    this.nativeSelectedDate = date;
    this.ngbSelectedDate = toNgbDate(date);
  }
  nativeSelectedDate!: Date;
  ngbSelectedDate!: NgbDate;

  @ViewChild(NgbDatepicker) datepicker!: NgbDatepicker;

  constructor() {}

  ngOnInit(): void {
    if (!this.date && !this.times) {
      throw new Error('BookingCalendarComponent must have either a date or times input');
    }

    if (this.date) {
      this.selectedDate = this.date;
    }
    else if (this.times) {
      this.selectedDate = this.findNextActivityTime();
    }
  }

  ngAfterViewInit(): void {
    this.datepicker.minDate = this.ngbSelectedDate;
    this.datepicker.maxDate = this.ngbSelectedDate;
  }

  findNextActivityTime(): Date {
    const now = new Date();
    const todayDayNumber = now.getDay();
    let dayNumber = todayDayNumber;
    let nextTime: Date | undefined = undefined;
    let daysAhead = 0;

    for (
      let i = 0;
      i < NumberOfDays;
        i++,
        dayNumber = ++dayNumber % NumberOfDays,
        daysAhead++
    ) {
      const timesInDay = this.times!
        .filter(time => time.day === dayNumber)
        .sort((a, b) => a.startTime.valueOf() - b.startTime.valueOf());
      
      if (timesInDay.length) {
        if (dayNumber == todayDayNumber) {
          for (let time of timesInDay) {
            if (time.startTime.valueOf() > now.valueOf()) {
              nextTime = time.startTime;
            }
          }
        }
        else {
          nextTime = timesInDay[0].startTime;
        }
      }

      if (nextTime) {
        break;
      }
    }

    if (!nextTime) {
      throw new Error('No activity times found');
    }

    return new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + daysAhead,
      nextTime.getHours(),
      nextTime.getMinutes()
    );
  }

  getDayName(day: DaysOfWeek): string {
    return getDayName(day);
  }
}
