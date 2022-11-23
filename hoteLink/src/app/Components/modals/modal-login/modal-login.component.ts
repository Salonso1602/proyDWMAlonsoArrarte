import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { LoginService } from '@services/login.service';
import { Modals } from '../modals';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {
  modalId = Modals.login;
  showPassword = false;
  triedLogin = false;
  profileForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private fb : FormBuilder, private lg : LoginService) { }

  ngOnInit(): void {
  }

  login(){
    const ctrls = this.profileForm.value;
    if(ctrls.email && ctrls.password){
    this.lg.authUser(ctrls.email, ctrls.password).then(result => {
      if(result){
        return true;
      } else{
        return false;
      }
    })
    }
  }

  togglePasswordView(){
    this.showPassword = !this.showPassword;
  }
}
