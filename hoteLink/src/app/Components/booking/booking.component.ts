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
    }>
  }>;

  subject$!: Observable<IEvent | IActivity>;
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
        })
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
}
