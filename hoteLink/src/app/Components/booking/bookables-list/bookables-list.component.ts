import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchComponent, SearchEntitiesNames } from '@components/search/search.component';

@Component({
  selector: 'app-bookables-list',
  templateUrl: './bookables-list.component.html',
  styleUrls: ['./bookables-list.component.scss']
})
export class BookablesListComponent implements OnInit {
  @ViewChild(SearchComponent) searchComponent!: SearchComponent;

  typesEnum: {[key: string]: SearchEntitiesNames} = Object.freeze({
    Activity: 'activity',
    Event: 'event'
  });

  get types(): string[] {
    return Object.values(this.typesEnum);
  }

  _selectedType: SearchEntitiesNames = this.typesEnum['Activity'];
  get selectedType(): SearchEntitiesNames {
    return this._selectedType;
  }

  set selectedType(type: SearchEntitiesNames) {
    this._selectedType = type;
    setTimeout(() => this.searchComponent.search());
  }

  constructor() { }

  ngOnInit(): void {
  }

}
