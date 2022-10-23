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
    if (!this.lg.authUser(this.profileForm.value.email!, this.profileForm.value.password!)){
      this.triedLogin =true;
    } else{
      this.triedLogin =false;
      alert("loggeado");
      //placeholder para hacer algo si loggea
    }
  }

  togglePasswordView(){
    this.showPassword = !this.showPassword;
  }
}
