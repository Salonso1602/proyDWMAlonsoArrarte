import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  @Input() requireUntilDate?: boolean;

  reservationForm = new FormGroup({
    places: new FormControl<number>(1, [Validators.required, Validators.min(1)]),
    name: new FormControl<string>('', Validators.required),
    untilDate: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
    if (this.requireUntilDate) {
      this.reservationForm.addControl('untilDate', new FormControl(undefined, Validators.required));
    }
  }

}
