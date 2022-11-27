import { Component,  OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ClaimsAndSuggestionsService } from '@services/claimsAndSuggestion.service';
import { Modals } from '../modals';

@Component({
  selector: 'app-modal-send-request',
  templateUrl: './modal-send-request.component.html',
  styleUrls: ['./modal-send-request.component.scss']
})
export class ModalSendRequestComponent implements OnInit {

  modalId = Modals.sendRequest;
  suggestion = new FormControl('', Validators.required);

  constructor(private cass : ClaimsAndSuggestionsService) { }

  ngOnInit(): void {
  }

  postMessage(){
    const claim = this.suggestion.getRawValue();

    if(!this.suggestion.valid || claim === null){
      alert("Por favor ingrese su sugerencia o reclamo en el espacio.")
    } else{
      this.cass.sendActivityQuestion(claim).subscribe(resp =>{
        alert('Mensaje Enviado');
        this.suggestion.reset()})
      
    }
  }

}
