import { Component, Directive, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Modals } from '../modals';

@Component({
  selector: 'app-modal-base',
  templateUrl: './modal-base.component.html',
  styleUrls: ['./modal-base.component.scss']
})
export class ModalBaseComponent implements OnInit {
  @Input() title!: string;
  @Input('id') modalId!: string;

  constructor() { }

  ngOnInit(): void {}
}