import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sty-bk-list',
  templateUrl: './sty-bk-list.component.html',
  styleUrls: ['./sty-bk-list.component.css']
})
export class StyBkListComponent implements OnInit {

  constructor() { }

  listItems = [
    {id: 1, title: 'Amazing View of Downtown Montreal', room: 'Entire apartment', beds: 2, points: 4.5 },
    {id: 2, title: '1006 Dowtwon Montréal', room: 'Entire apartment', beds: 1, points: 3.5 },
    {id: 3, title: 'Modern Downtown Condo on Berri Street', room: 'Entire apartment', beds: 3, points: 4.0 }];

  ngOnInit(): void {
  }

 
}
