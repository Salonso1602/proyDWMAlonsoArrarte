import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-filter-text',
  templateUrl: './search-filter-text.component.html',
  styleUrls: ['./search-filter-text.component.scss']
})
export class SearchFilterTextComponent implements OnInit, AfterViewInit {
  @Output() searchTextChanged = new EventEmitter<string>;
  @ViewChild('searchInput') searchInputRef!: ElementRef;

  searchInput!: HTMLInputElement;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.searchInput = this.searchInputRef.nativeElement;
  }

  updateSearchText() {
    this.searchTextChanged.emit(this.searchInput.value);
  }
}
