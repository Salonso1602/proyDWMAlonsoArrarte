import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-and-filter',
  templateUrl: './search-and-filter.component.html',
  styleUrls: ['./search-and-filter.component.scss']
})
export class SearchAndFilterComponent implements OnInit {

  searchtext = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    alert(this.searchtext.value)
  }
}
