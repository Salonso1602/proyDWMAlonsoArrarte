import { Component, OnInit, Input } from '@angular/core';
import { Modals } from '../modals';
import { categoryTypes } from '@enums/categoryTypes';
import { CategoryService } from '@services/category.service';
import { ICategory } from '@interfaces/category';

@Component({
  selector: 'app-modal-filters',
  templateUrl: './modal-filters.component.html',
  styleUrls: ['./modal-filters.component.scss']
})
export class ModalFiltersComponent implements OnInit {
  modalId : Modals = Modals.filtersByCategory;
  filters : ICategory[] = [];
  @Input() filterType : categoryTypes = categoryTypes.Food;
  selectedFilters : ICategory[] = [];

  constructor(private filterService : CategoryService) { }

  ngOnInit(): void {
    this.getFilters();
  }

  getFilters(){
    switch (this.filterType){
      case (categoryTypes.Food):
        this.filters = this.filterService.getFoodCategories();
        break;
      case (categoryTypes.Activity):
        this.filters = this.filterService.getActivityCategories();
        break;
    }
  }

  filterToggle(filter : ICategory){
    if (this.selectedFilters.includes(filter)){
      this.selectedFilters.splice(this.selectedFilters.indexOf(filter),1);
    } else {
      this.selectedFilters.push(filter);
    }
    console.log(this.selectedFilters);
  }
}
