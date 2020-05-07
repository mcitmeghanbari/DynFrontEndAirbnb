import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { DatabaseService } from 'src/app/secure/services/database.service';
import { AuthenticationService } from 'src/app/public/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sty-bk-detail',
  templateUrl: './sty-bk-detail.component.html',
  styleUrls: ['./sty-bk-detail.component.css']
})
export class StyBkDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, public databaseService: DatabaseService, private authenticationService: AuthenticationService) { }

  item;

  ngOnInit(): void {
    let id = this.route.snapshot.params['i'];
    this.item = this.databaseService.findHost(id);
  }

  gotoLink(link) {
    this.router.navigate([link]);
  }
}
