import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { newsTypes } from '@enums/newsTypes';
import { IActivity, TimeOfActivity } from '@interfaces/activity';
import { IBookable } from '@interfaces/bookable';
import { IEvent } from '@interfaces/event';
import { ActivitiesService } from '@services/activities.service';
import { EventsService } from '@services/events.service';
import * as moment from 'moment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookingForm?: FormGroup<{
    location: FormControl,
    availablePlaces: FormControl,
    price: FormControl,
    booking: FormGroup<{
      placesToBook: FormControl,
      untilDate?: FormControl
    }>,
    totalPrice: FormControl
  }>;

  subject$!: Observable<IEvent | IActivity>;
  eventOrActivity!: IEvent | IActivity;
  type!: string;

  constructor(
    private decimalPipe: DecimalPipe,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private activitiesService: ActivitiesService,
    private eventsService: EventsService
  ) {
    const url = this.router.url.split('/');
    const subjectId = this.route.snapshot.paramMap.get('id') as string;

    if (url.includes(newsTypes.Activity)) {
      this.subject$ = this.activitiesService.getById(subjectId);
      this.type = newsTypes.Activity;
    }
    else if (url.includes(newsTypes.Event)) {
      this.subject$ = this.eventsService.getById(subjectId);
      this.type = newsTypes.Event;
    }
    else {
      this.router.navigate(['home']);
    }

    this.subject$.subscribe(subject => {
      this.eventOrActivity = subject;

      this.bookingForm = this.fb.group({
        location: new FormControl({ value: subject.place, disabled: true }),
        availablePlaces: new FormControl({
          value: subject.remainingPlaces + ' / ' + subject.reservationLimit,
          disabled: true
        }),
        price: new FormControl({ 
          value: this.decimalPipe.transform(this.isEvent(subject) ? subject.entranceFee : subject.weeklyPrice, '1.2-2'),
          disabled: true
        }),
        booking: this.fb.group({
          placesToBook: new FormControl(1, [
            Validators.required,
            Validators.min(1),
            Validators.max(subject.remainingPlaces)
          ])
        }),
        totalPrice: new FormControl({ value: null, disabled: true })
      });

      this.bookingForm.valueChanges.subscribe(() => {
        let basePrice;
        let weeks = 1;
        if (this.isEvent(subject)) {
          basePrice = subject.entranceFee;
        }
        else {
          basePrice = subject.weeklyPrice;
          let untilDate = this.bookingForm!.controls.booking!.controls.untilDate!.value;
          weeks = moment(untilDate).diff(moment(), 'weeks') + 1;
        }
        
        const totalPrice = basePrice
          * weeks
          * this.bookingForm!.controls.booking!.controls.placesToBook!.value;

        this.bookingForm!.controls.totalPrice!.setValue(
          this.decimalPipe.transform(totalPrice, '1.2-2'),
          { emitEvent: false }
        );
      });
    });
  }

  ngOnInit(): void {
  }

  isEvent(subject: IBookable): subject is IEvent {
    return this.type === newsTypes.Event;
  }

  isActivity(subject: IBookable): subject is IActivity {
    return this.type === newsTypes.Activity;
  }

  makeBooking() {
    const subjectId = parseInt(this.route.snapshot.paramMap.get('id') as string);
    const placesToBook = this.bookingForm!.controls.booking!.controls.placesToBook!.value;
    const untilDate = this.bookingForm!.controls.booking!.controls.untilDate!.value;
    const finalPrice = this.bookingForm!.controls.totalPrice!.value;

    if (this.type === newsTypes.Event) {
      this.eventsService.book(subjectId, placesToBook, finalPrice).subscribe(() => {
        this.router.navigate(['home']);
      });
    }
    else {
      this.activitiesService.book(subjectId, placesToBook, untilDate, finalPrice).subscribe(() => {
        this.router.navigate(['home']);
      });
    }
  }
}
