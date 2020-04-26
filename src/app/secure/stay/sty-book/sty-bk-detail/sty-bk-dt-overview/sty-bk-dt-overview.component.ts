import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sty-bk-dt-overview',
  templateUrl: './sty-bk-dt-overview.component.html',
  styleUrls: ['./sty-bk-dt-overview.component.css']
})
export class StyBkDtOverviewComponent implements OnInit {

  constructor() { }

  listSummary = [
    {icon: '<i class="fas fa-home"></i>', title: 'Entire home', desc: 'You’ll have the apartment to yourself.' },
    {icon: '<i class="fas fa-spray-can"></i>', title: 'Sparkling clean', desc: '16 recent guests said this place was sparkling clean.' },
    {icon: '<i class="fas fa-map-marker-alt"></i>', title: 'Great location', desc: '95% of recent guests gave the location a 5-star rating.' },
    {icon: '<i class="fas fa-key"></i>', title: 'Great check-in experience', desc: '90% of recent guests gave the check-in process a 5-star rating.' }];

  ngOnInit(): void {
  }

}
