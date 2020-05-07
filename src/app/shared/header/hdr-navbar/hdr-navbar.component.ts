import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/public/services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hdr-navbar',
  templateUrl: './hdr-navbar.component.html',
  styleUrls: ['./hdr-navbar.component.css']
})
export class HdrNavbarComponent implements OnInit {

  constructor(private router: Router, public authenticationService: AuthenticationService) { }

  imageUser = "assets/imgs/user.png";

  ngOnInit(): void {
    //this.imageUser = "assets/imgs/user/" + this.authenticationService.user.id + ".jpg";
  }

  logout() {
    this.authenticationService.logout();
    this.imageUser = "assets/imgs/user.png";
  }

  gotoLink(link) {
    this.router.navigate([link]);
  }
}
