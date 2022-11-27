import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
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
  profileForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  loginFailed = false;
  loginError = '';

  constructor(private fb : FormBuilder, private lg : LoginService) { }

  ngOnInit(): void {
  }

  login(){
    const ctrls = this.profileForm.value;
    if(ctrls.email && ctrls.password){
      this.lg.authUser(ctrls.email, ctrls.password).subscribe(
        key => {
          if(!key.idToken){
            this.loginFailed = true;
          }
          else {
            this.profileForm.reset();
            document.getElementById('closeModal' + this.modalId)!.click();
          }
        },
        (err: HttpErrorResponse) => {
          this.loginFailed = true;
          if (err.status === 401) {
            this.loginError = 'Usuario o contraseña inválidos.';
          }
          else if (err.status === 500) {
            this.loginError = 'Ha ocurrido un error, por favor reintente más tarde.';
          }
        }
      );
    }
  }

  togglePasswordView(){
    this.showPassword = !this.showPassword;
  }
}
