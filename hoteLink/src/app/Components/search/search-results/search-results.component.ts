import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RetrievedItem } from '../search-service';
import { SearchEntities } from '../search.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() data$!: Observable<RetrievedItem<SearchEntities>[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
