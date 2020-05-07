import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/secure/services/database.service';
import { AuthenticationService } from 'src/app/public/services/authentication.service';

@Component({
  selector: 'app-sty-trp-detail',
  templateUrl: './sty-trp-detail.component.html',
  styleUrls: ['./sty-trp-detail.component.css']
})
export class StyTrpDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, public databaseService: DatabaseService, private authenticationService: AuthenticationService) { }

  item;
  itemHost = null;

  user = null;
  userHost = null;
  imageHost = "";
  imageUser = "";

  ngOnInit(): void {
    let id = this.route.snapshot.params['i'];

    this.item = this.databaseService.findStay(id);
    this.itemHost = this.databaseService.findHost(this.item.host);

    this.user = this.authenticationService.user;
    this.userHost = this.authenticationService.findUserById(this.itemHost.user);
    this.imageUser = "assets/imgs/user/" + this.user.id + ".jpg";
    this.imageHost = "assets/imgs/user/" + this.userHost.id + ".jpg";
  }

  gotoLink(link) {
    this.router.navigate([link]);
  }
}
