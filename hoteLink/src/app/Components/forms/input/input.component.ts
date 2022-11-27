import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input('id') inputId!: string;
  @Input() hasSuffix = false;
  @Input() type: 'text' | 'number' | 'email' | 'password' = 'text'; 

  constructor() { }

  ngOnInit(): void {
    if (!this.inputId) {
      throw new Error('Input id is required in InputComponent');
    }
  }

}
