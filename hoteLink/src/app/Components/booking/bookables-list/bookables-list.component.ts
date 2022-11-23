import { Component, OnInit } from '@angular/core';
import { SearchEntitiesNames } from '@components/search/search.component';

@Component({
  selector: 'app-bookables-list',
  templateUrl: './bookables-list.component.html',
  styleUrls: ['./bookables-list.component.scss']
})
export class BookablesListComponent implements OnInit {
  typesEnum: {[key: string]: SearchEntitiesNames} = Object.freeze({
    Activity: 'activity',
    Event: 'event'
  });

  get types(): string[] {
    return Object.values(this.typesEnum);
  }

  selectedType: SearchEntitiesNames = this.typesEnum['Activity'];

  constructor() { }

  ngOnInit(): void {
  }

}
