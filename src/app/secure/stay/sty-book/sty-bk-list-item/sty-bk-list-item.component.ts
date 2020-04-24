import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-sty-bk-list-item',
  templateUrl: './sty-bk-list-item.component.html',
  styleUrls: ['./sty-bk-list-item.component.css']
})
export class StyBkListItemComponent implements OnInit {

  constructor() { }

  @Input() item: {id: number, title: string, room: string, beds: number, points: number };

  ngOnInit(): void {
  }

}
