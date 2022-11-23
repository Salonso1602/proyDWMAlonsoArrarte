import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IActivity } from '@interfaces/activity';
import { ICategory } from '@interfaces/category';
import { IDish } from '@interfaces/dish';
import { IEvent } from '@interfaces/event';
import { RetrievedItem, SearchService } from '@components/search/search-service';
import { ActivitiesService } from '@services/activities.service';
import { EventsService } from '@services/events.service';
import { Observable } from 'rxjs';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { DishesService } from '@services/dishes.service';

type SearchEntitiesNames = 'activity' | 'event' | 'dish';
export type SearchEntities = IActivity | IEvent | IDish;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input('entity') entityName!: SearchEntitiesNames;
  entityType!: SearchEntities;
  entityService!: SearchService<SearchEntities>;
  
  @ViewChild(SearchFilterComponent) searchFilterComponent!: SearchFilterComponent;
  
  results$!: Observable<RetrievedItem<SearchEntities>[]>;

  constructor(
    private activitiesService: ActivitiesService,
    private eventsService: EventsService,
    private dishesService: DishesService
  ) {}

  ngOnInit(): void {
    if (!this.entityName) {
      throw new Error('Entity type not set for Search & Filter component');
    }

    switch (this.entityName) {
      case 'activity':
        this.entityService = this.activitiesService;
        break;
      case 'event':
        this.entityService = this.eventsService;
        break;
      case 'dish':
        this.entityService = this.dishesService;
        break;
    }
  }

  search() {
    this.results$ = this.entityService.getByFilter(this.searchFilterComponent.searchFilter);
    this.results$.subscribe();
  }
}
