import { Component, OnInit } from '@angular/core';
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
  subject$!: Observable<IEvent | IActivity>;
  type!: string;

  constructor(
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
