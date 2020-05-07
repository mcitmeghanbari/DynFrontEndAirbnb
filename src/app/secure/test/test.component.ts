import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';
import { AuthenticationService } from 'src/app/public/services/authentication.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, 
    private authenticationService : AuthenticationService ,private databaseService : DatabaseService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'location': new FormControl(null, [Validators.required]),
      'room': new FormControl(null, [Validators.required]),
      'guests': new FormControl(null, [Validators.required])
    });
  }

  submit() {
    this.databaseService.addHost(this.authenticationService.user.id, this.form.value.location, this.form.value.room, this.form.value.guests);
    //this.router.navigate(['/sec/host/room']);
  }

}
