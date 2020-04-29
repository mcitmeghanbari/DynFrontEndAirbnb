import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-autht-login',
  templateUrl: './autht-login.component.html',
  styleUrls: ['./autht-login.component.css']
})
export class AuthtLoginComponent implements OnInit {

  constructor() { }

  formLogin: FormGroup;
  validationMsg = '';

  ngOnInit() {
    this.formLogin = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  validateForm(ctrl, type?) {
    let result = false;

    if (type == null) {
      result = (ctrl.errors && ctrl.errors.required && ctrl.touched);
    }

    if (type == "required") {
      result = (ctrl.errors && ctrl.errors.required && ctrl.touched);
    }

    if (type == "email") {
      result = (ctrl.errors && ctrl.errors.email);
    }

    // if (type == "password") {
    //   result = (ctrl.errors && ctrl.errors.email);
    // }

    return result;
  }


  submitLogin() {
    alert('login!!');
  }
}
