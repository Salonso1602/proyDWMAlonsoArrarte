import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-toggle-button',
  templateUrl: './modal-toggle-button.component.html',
  styleUrls: ['./modal-toggle-button.component.scss']
})
export class ModalToggleButtonComponent implements OnInit {
  @Input() modalId!: string;
  @Input() cssClass?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
