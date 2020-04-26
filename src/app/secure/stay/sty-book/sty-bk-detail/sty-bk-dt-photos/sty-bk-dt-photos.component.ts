import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-sty-bk-dt-photos',
  templateUrl: './sty-bk-dt-photos.component.html',
  styleUrls: ['./sty-bk-dt-photos.component.css']
})
export class StyBkDtPhotosComponent implements OnInit {

  constructor() { }

  @Input() id: number;
  
  ngOnInit(): void {
  }

}
