import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/public/services/authentication.service';
import { DatabaseService } from 'src/app/secure/services/database.service';


@Component({
  selector: 'app-sty-trp-list',
  templateUrl: './sty-trp-list.component.html',
  styleUrls: ['./sty-trp-list.component.css']
})
export class StyTrpListComponent implements OnInit {

  items = null;

  constructor(private router : Router, public databaseSrvice: DatabaseService, public authenticationService : AuthenticationService) {
    this.items = databaseSrvice.getStaysByUserId(this.authenticationService.user);
  }

  ngOnInit(): void {

  }

  gotoLink(link){
    this.router.navigate([link]);    
  } 

}
