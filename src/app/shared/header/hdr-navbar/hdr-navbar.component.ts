import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/public/services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hdr-navbar',
  templateUrl: './hdr-navbar.component.html',
  styleUrls: ['./hdr-navbar.component.css']
})
export class HdrNavbarComponent implements OnInit {

  constructor(private router: Router, public authenticationService : AuthenticationService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authenticationService.logout();
  }

  gotoLink(link){
    this.router.navigate([link]);
  }
}
