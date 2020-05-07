import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { DatabaseService } from 'src/app/secure/services/database.service';
import { AuthenticationService } from 'src/app/public/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sty-trp-list-item',
  templateUrl: './sty-trp-list-item.component.html',
  styleUrls: ['./sty-trp-list-item.component.css']
})
export class StyTrpListItemComponent implements OnInit {

  constructor(private router: Router, private databaseService: DatabaseService, private authenticationService: AuthenticationService) { }

  @Input() item;
  itemHost = null;
  itemUser = null;

  hostTitle = "";

  ngOnInit(): void {
    this.itemHost = this.databaseService.findHost(this.item.host);
    this.itemUser = this.authenticationService.findUserById(this.itemHost.user);

    this.hostTitle = this.itemHost.title;
    this.hostTitle = this.hostTitle.substr(0, 25) + " ... ";
 
  }
}
