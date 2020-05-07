import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/public/services/authentication.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if (!this.authenticationService.isValid) {
      this.gotoLink('/');
    }
  }

  gotoLink(link) {
    this.router.navigate([link]);
  }

}
