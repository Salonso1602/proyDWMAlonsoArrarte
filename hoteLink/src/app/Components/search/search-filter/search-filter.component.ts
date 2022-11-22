import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Modals } from '@components/modals/modals';
import { ICategory } from '@interfaces/category';
import { SearchFilter } from './search-filter';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  public readonly searchFilter: SearchFilter = {
    searchText: '',
    categories: []
  }

  constructor() { }

  ngOnInit(): void {
  }

  updateSearchText(searchText: string): void {
    this.searchFilter.searchText = searchText;
  }

  updateCategories(selectedCategories: ICategory[]): void {
    this.searchFilter.categories = selectedCategories;
  }
}