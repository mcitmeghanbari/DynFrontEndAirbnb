import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../../services/database.service';

@Component({
  selector: 'app-sty-bk-list',
  templateUrl: './sty-bk-list.component.html',
  styleUrls: ['./sty-bk-list.component.css']
})
export class StyBkListComponent implements OnInit {

  items = null;

  constructor(private databaseSrvice: DatabaseService) {
    this.items = databaseSrvice.items;
  }


  ngOnInit(): void {
  }


}
