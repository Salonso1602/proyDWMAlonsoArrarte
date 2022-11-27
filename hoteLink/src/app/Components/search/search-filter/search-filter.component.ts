import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Modals } from '@components/modals/modals';
import { categoryTypes } from '@enums/categoryTypes';
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
  
  @Input() categoryType!: categoryTypes;

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