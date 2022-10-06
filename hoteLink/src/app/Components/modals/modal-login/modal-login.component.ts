import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
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

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  login(){
    alert(this.profileForm.value.email + ' ' + this.profileForm.value.password)
  }

  togglePasswordView(){
    this.showPassword = !this.showPassword;
  }
}
