import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Modals } from '@components/modals/modals';
import { categoryTypes } from '@enums/categoryTypes';
import { ICategory } from '@interfaces/category';

@Component({
  selector: 'app-search-filter-categories',
  templateUrl: './search-filter-categories.component.html',
  styleUrls: ['./search-filter-categories.component.scss']
})
export class SearchFilterCategoriesComponent implements OnInit {
  readonly categoriesModalName = Modals.filtersByCategory;
  @Input() categoryType!: categoryTypes;

  @Output() selectedCategoriesChanged = new EventEmitter<ICategory[]>();

  constructor() { }

  ngOnInit(): void {
    if (!this.categoryType) {
      throw new Error('Category type is required in SearchFilterCategoriesComponent');
    }
  }

  updateSelectedCategories(selectedCategories: ICategory[]): void {
    this.selectedCategoriesChanged.emit(selectedCategories);
  }
}
