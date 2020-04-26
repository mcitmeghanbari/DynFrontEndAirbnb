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
    {id: 3, title: 'Modern Downtown Condo on Berri Street', room: 'Entire loft', beds: 3, points: 4.0 },
    {id: 4, title: 'Color of Montreal +1 free parking', room: 'Entire apartment', beds: 2, points: 4.8 },
    {id: 5, title: 'Stroll to the Old Port from this Enchanting Oasis!', room: 'Entire room', beds: 1, points: 3.5 },
    {id: 6, title: 'The light of Montreal (1 Free parking)', room: 'Entire apartment', beds: 1, points: 5.0 },
    {id: 7, title: 'North Pearl in Downtown Montreal', room: 'Entire loft', beds: 4, points: 3.5 },
    {id: 8, title: 'Skylit Loft in Old Montreal', room: 'Entire apartment', beds: 1, points: 2.5 }];

    
  ngOnInit(): void {
  }

 
}
