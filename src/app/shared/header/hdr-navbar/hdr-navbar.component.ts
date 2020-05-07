import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/public/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-hdr-navbar',
  templateUrl: './hdr-navbar.component.html',
  styleUrls: ['./hdr-navbar.component.css']
})
export class HdrNavbarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, public authenticationService: AuthenticationService) { }

  imageUser = "assets/imgs/user.png";

  ngOnInit(): void {
    //this.imageUser = "assets/imgs/user/" + this.authenticationService.user.id + ".jpg";
  }

  // setHomeLink() {
  //   if (this.authenticationService.isValid())
  //     this.gotoLink('/sec');
  //   else
  //     this.gotoLink('/');
  // }

  logout() {
    this.authenticationService.logout();
    this.imageUser = "assets/imgs/user.png";
    this.gotoLink("/");
  }

  gotoLink(link) {
    this.router.navigate([link]);
  }
}
