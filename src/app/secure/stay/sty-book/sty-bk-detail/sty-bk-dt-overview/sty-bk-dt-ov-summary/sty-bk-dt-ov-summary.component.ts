import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-sty-bk-dt-ov-summary',
  templateUrl: './sty-bk-dt-ov-summary.component.html',
  styleUrls: ['./sty-bk-dt-ov-summary.component.css']
})
export class StyBkDtOvSummaryComponent implements OnInit {

  constructor() { }

  @Input() item: {icon: string, title: string, desc: string };

  ngOnInit(): void {
  }

}
