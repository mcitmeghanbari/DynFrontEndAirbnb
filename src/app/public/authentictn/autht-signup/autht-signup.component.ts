import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-autht-signup',
  templateUrl: './autht-signup.component.html',
  styleUrls: ['./autht-signup.component.css']
})
export class AuthtSignupComponent implements OnInit {

  constructor() { }

  formSignup: FormGroup;
  validationMsg = '';

  ngOnInit() {
    this.formSignup = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  validateForm(ctrl, type?) {
    let result = false;

    if (type == "") {
      result = (ctrl.errors && ctrl.touched);
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


  submitSignup() {
    alert('Sign up!!');
  }

}
