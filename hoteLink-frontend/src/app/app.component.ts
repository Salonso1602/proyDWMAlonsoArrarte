import { Component } from '@angular/core';
import { Modals } from '@components/modals/modals';
import { categoryTypes } from '@enums/categoryTypes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hoteLink';
  modals = Modals;
  categories = categoryTypes;
}
