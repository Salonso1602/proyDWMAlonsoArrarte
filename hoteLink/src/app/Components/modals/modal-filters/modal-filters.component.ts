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
  filterType : categoryTypes = categoryTypes.Food;

  constructor(private filterService : CategoryService) { }

  ngOnInit(): void {
    this.filterService.getCategories().subscribe(category => {
      this.filters = category;
    });
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
}
