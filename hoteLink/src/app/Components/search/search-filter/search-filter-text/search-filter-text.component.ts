import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-filter-text',
  templateUrl: './search-filter-text.component.html',
  styleUrls: ['./search-filter-text.component.scss']
})
export class SearchFilterTextComponent implements OnInit, AfterViewInit {
  @Output() searchTextChanged = new EventEmitter<string>;
  @ViewChild('searchInput') searchInputRef!: ElementRef;

  searchInput!: HTMLInputElement;
  searchForm = new FormControl('')
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  updateSearchText() {
    const formVal = this.searchForm.getRawValue();
    if(formVal){
    this.searchTextChanged.emit(formVal);
  }
  }
}
