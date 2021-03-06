import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { DatabaseService } from 'src/app/secure/services/database.service';
import { AuthenticationService } from 'src/app/public/services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sty-bk-list-item',
  templateUrl: './sty-bk-list-item.component.html',
  styleUrls: ['./sty-bk-list-item.component.css']
})
export class StyBkListItemComponent implements OnInit {

  constructor(private router: Router, private databaseService: DatabaseService, private authenticationService: AuthenticationService) { }

  @Input() item;
  itemHost = null;
  itemUser = null;

  ngOnInit(): void {
    this.itemHost = this.databaseService.findHost(this.item.id);
    this.itemUser = this.authenticationService.findUserById(this.itemHost.user); 
  }

}
