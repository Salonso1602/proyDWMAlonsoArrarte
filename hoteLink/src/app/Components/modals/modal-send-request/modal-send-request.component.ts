import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Modals } from '../modals';

@Component({
  selector: 'app-modal-send-request',
  templateUrl: './modal-send-request.component.html',
  styleUrls: ['./modal-send-request.component.scss']
})
export class ModalSendRequestComponent implements OnInit {

  modalId = Modals.sendRequest;
  suggestion = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  postMessage(){
    if(this.suggestion.value===''){
      alert("Por favor ingrese su sugerencia o reclamo en el espacio.")
    } else{
      this.suggestion.reset()
    /*
    PLACEHOLDER PARA SERVICIO DE POST
    */
    }
  }
}
