import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
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
import { RestaurantService } from '@services/restaurant.service';
import { categoryTypes } from '@enums/categoryTypes';

export type SearchEntitiesNames = 'activity' | 'event' | 'dish';
export type SearchEntities = IActivity | IEvent | IDish;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {
  _entityName!: SearchEntitiesNames;
  @Input('entity') get entityName(): SearchEntitiesNames {
    return this._entityName;
  }
  set entityName(entityName: SearchEntitiesNames) {
    this._entityName = entityName;
    this.setCategoryTypeAndService(entityName);
  }

  entityType!: SearchEntities;
  entityService!: SearchService<SearchEntities>;
  categoryType!: categoryTypes;
  
  @ViewChild(SearchFilterComponent) searchFilterComponent!: SearchFilterComponent;
  
  results$!: Observable<RetrievedItem<SearchEntities>[]>;

  constructor(
    private activitiesService: ActivitiesService,
    private eventsService: EventsService,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    if (!this.entityName) {
      throw new Error('Entity type not set for Search & Filter component');
    }

    this.setCategoryTypeAndService(this.entityName);
  }

  setCategoryTypeAndService(entity: SearchEntitiesNames) {
    switch (entity) {
      case 'activity':
        this.entityService = this.activitiesService;
        this.categoryType = categoryTypes.Activity;
        break;
      case 'event':
        this.entityService = this.eventsService;
        this.categoryType = categoryTypes.Activity;
        break;
      case 'dish':
        this.entityService = this.restaurantService;
        this.categoryType = categoryTypes.Food;
        break;
    }
  }

  ngAfterViewInit(): void {
    this.search();
  }

  search() {
    this.results$ = this.entityService.getByFilter(this.searchFilterComponent.searchFilter);
    this.results$.subscribe();
  }
}
