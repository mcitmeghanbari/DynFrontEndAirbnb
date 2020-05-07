import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-autht-signup',
  templateUrl: './autht-signup.component.html',
  styleUrls: ['./autht-signup.component.css']
})
export class AuthtSignupComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  formSignup: FormGroup;
  message = '';

  ngOnInit() {
    this.formSignup = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'fname': new FormControl(null, [Validators.required]),
      'lname': new FormControl(null, [Validators.required])
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

  submitSignup() {
    this.authService.signup(this.formSignup.value.email, this.formSignup.value.password,
      this.formSignup.value.fname, this.formSignup.value.lname);
    this.message = this.authService.message;
    if (this.authService.isValid()) {
      this.router.navigate(['/sec']);
    }
  }

}
