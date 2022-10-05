import { Injectable } from '@angular/core';
import { BehaviorSubject, } from 'rxjs';
import { Modals } from '../Components/modals/modals';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {
  shownModal$ = new BehaviorSubject<Modals | undefined>(undefined);

  constructor() {}

  getModalVisible$() {
    return this.shownModal$;
  }

  setModalVisible(modal: Modals | undefined) {
    this.shownModal$.next(modal);
  }
}
