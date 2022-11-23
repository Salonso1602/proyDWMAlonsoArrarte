import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Modals } from '@components/modals/modals';
import { ICategory } from '@interfaces/category';

@Component({
  selector: 'app-search-filter-categories',
  templateUrl: './search-filter-categories.component.html',
  styleUrls: ['./search-filter-categories.component.scss']
})
export class SearchFilterCategoriesComponent implements OnInit {
  readonly categoriesModalName = Modals.filtersByCategory;

  @Output() selectedCategoriesChanged = new EventEmitter<ICategory[]>();

  constructor() { }

  ngOnInit(): void {
  }

  updateSelectedCategories(selectedCategories: ICategory[]): void {
    this.selectedCategoriesChanged.emit(selectedCategories);
  }
}
