import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  @Input() requireUntilDate?: boolean;
  @Input() formGroup!: FormGroup<{
    placesToBook: FormControl,
    untilDate?: FormControl
  }>

  constructor() { }

  ngOnInit(): void {
    if (!this.formGroup) {
      throw new Error('Parent nested FormGroup is required in BookingFormComponent');
    }

    if (this.requireUntilDate) {
      this.formGroup.addControl('untilDate', new FormControl(undefined, Validators.required));
    }
  }

}
