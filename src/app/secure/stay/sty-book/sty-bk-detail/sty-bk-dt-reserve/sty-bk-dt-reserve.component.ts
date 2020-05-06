import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sty-bk-dt-reserve',
  templateUrl: './sty-bk-dt-reserve.component.html',
  styleUrls: ['./sty-bk-dt-reserve.component.css']
})
export class StyBkDtReserveComponent implements OnInit {

  formReserve: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formReserve = new FormGroup({
      'ckechin': new FormControl(null, [Validators.required]),
      'ckechout': new FormControl(null, [Validators.required]),
      'guests': new FormControl(null, [Validators.required])
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


  submitReserve() {
    
  }

}
