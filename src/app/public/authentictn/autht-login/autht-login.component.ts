import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-autht-login',
  templateUrl: './autht-login.component.html',
  styleUrls: ['./autht-login.component.css']
})
export class AuthtLoginComponent implements OnInit {

  constructor(public authService: AuthenticationService, private router: Router) { }

  formLogin: FormGroup;
  message = '';

  ngOnInit() {
    this.formLogin = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(3)])
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

    if (type == "minLength") {
      console.log(ctrl.errors);
      result = (ctrl.errors && ctrl.errors.minlength);
    }

    return result;
  }


  submitLogin() {
    this.authService.login(this.formLogin.value.email, this.formLogin.value.password);
    this.message = this.authService.message;
    if (this.authService.isValid) {
      this.router.navigate(['/sec']);
    }
    // this.authService.message;
    // this.authService.isValid;
  }
}
