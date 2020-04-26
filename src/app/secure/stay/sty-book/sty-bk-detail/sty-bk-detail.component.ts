import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sty-bk-detail',
  templateUrl: './sty-bk-detail.component.html',
  styleUrls: ['./sty-bk-detail.component.css']
})
export class StyBkDetailComponent implements OnInit {

  item = {id: null, title: '', room: '', beds: null, points: null };


  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.item.id = this.route.snapshot.params['i'];
    // this.item.title = this.route.snapshot.params['t'];
    // this.item.room = this.route.snapshot.params['r'];
    // this.item.beds = this.route.snapshot.params['b'];
    // this.item.points = this.route.snapshot.params['p'];

  }

}
