import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/public/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sty-book',
  templateUrl: './sty-book.component.html',
  styleUrls: ['./sty-book.component.css']
})
export class StyBookComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, public authenticationService: AuthenticationService) { }


  ngOnInit(): void {
    if (!this.authenticationService.isValid())
      this.gotoLink("/");
  }

  gotoLink(link) {
    this.router.navigate([link]);
  }
}
