import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DatabaseService } from 'src/app/secure/services/database.service';
import { AuthenticationService } from 'src/app/public/services/authentication.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-sty-bk-dt-reserve',
  templateUrl: './sty-bk-dt-reserve.component.html',
  styleUrls: ['./sty-bk-dt-reserve.component.css']
})
export class StyBkDtReserveComponent implements OnInit {

  @Input() item;
  
  formReserve: FormGroup;
  hostId;
  userId;

  constructor(private router: Router, private route: ActivatedRoute,
    public databaseService: DatabaseService,
    public authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.formReserve = new FormGroup({
      'checkin': new FormControl(null, [Validators.required]),
      'checkout': new FormControl(null, [Validators.required]),
      'guests': new FormControl(null, [Validators.required])
    });

    this.hostId = this.route.snapshot.params['i'];
    this.userId = this.authenticationService.user.id;
  }

  submitReserve() {
    if (this.formReserve.valid) {
      this.databaseService.addStay(this.userId, this.hostId, this.formReserve.value.checkin, this.formReserve.value.checkout, this.formReserve.value.guests);
      this.gotoLink('/sec/trips');
    }
  }


  gotoLink(link) {
    this.router.navigate([link]);
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

}
