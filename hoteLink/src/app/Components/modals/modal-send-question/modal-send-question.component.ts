import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { newsTypes } from '@enums/newsTypes';
import { LoginService } from '@services/login.service';
import { QuestionService } from '@services/question.service';
import { Modals } from '../modals';

@Component({
  selector: 'app-modal-send-question',
  templateUrl: './modal-send-question.component.html',
  styleUrls: ['./modal-send-question.component.scss']
})
export class ModalSendQuestionComponent implements OnInit {

  modalId = Modals.sendQuestion;
  question = new FormControl('', Validators.required);

  @Input() cardId! : string | number;
  cardType? : newsTypes;

  constructor(private ls : LoginService, private qs : QuestionService) { }

  ngOnInit(): void {
  }

  postMessage(){
    const questionText = this.question.getRawValue();

    if(this.question.valid && this.ls.isLoggedIn() !== null && questionText !== null){
      if(this.cardType === newsTypes.Activity){
        this.qs.sendActivityQuestion(this.cardId as string, questionText).subscribe( resp => {
          alert('Consulta enviada');
          this.question.reset()
        })
      } else {
        this.qs.sendEventQuestion(this.cardId as string, questionText).subscribe( resp => {
          alert('Consulta enviada');
          this.question.reset()
        })
      }
      
    } else{
      alert("Por favor ingrese su consulta en el espacio.")
    }
  }
  
}
