import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Modals } from '../modals';
import { categoryTypes } from '@enums/categoryTypes';
import { ICategory } from '@interfaces/category';
import { ActivitiesService } from '@services/activities.service';
import { EventsService } from '@services/events.service';
import { RestaurantService } from '@services/restaurant.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal-filters',
  templateUrl: './modal-filters.component.html',
  styleUrls: ['./modal-filters.component.scss']
})
export class ModalFiltersComponent implements OnInit {
  modalId: Modals = Modals.filtersByCategory;
  categories!: Observable<ICategory[]>;
  @Input() filterType!: categoryTypes;
  selectedFilters: ICategory[] = [];

  @Output() selectionConfirmed = new EventEmitter<ICategory[]>();

  constructor(
    private restaurantService: RestaurantService,
    private activitiesService: ActivitiesService,
    private eventsService: EventsService
  ) {

  }

  ngOnInit(): void {
    this.getFilters();
  }

  getFilters(){
    if (!this.filterType) {
      throw new Error('Filter type is required in ModalFiltersComponent');
    }

    switch (this.filterType){
      case (categoryTypes.Food):
        this.categories = this.restaurantService.getCategories();
        break;
      case (categoryTypes.Activity):
        this.categories = this.activitiesService.getCategories();
        break;
    }
  }

  filterToggle(filter : ICategory){
    if (this.selectedFilters.includes(filter)){
      this.selectedFilters.splice(this.selectedFilters.indexOf(filter),1);
    } else {
      this.selectedFilters.push(filter);
    }
  }

  updateSelectedCategories() {
    this.selectionConfirmed.emit(this.selectedFilters);
  }
}
