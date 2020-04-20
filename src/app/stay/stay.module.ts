import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StyBookComponent } from './sty-book/sty-book.component';
import { StyTripsComponent } from './sty-trips/sty-trips.component';

import { StyBkSearchComponent } from './sty-book/sty-bk-search/sty-bk-search.component';
import { StyBkListComponent } from './sty-book/sty-bk-list/sty-bk-list.component';
import { StyBkListItemComponent } from './sty-book/sty-bk-list-item/sty-bk-list-item.component';
import { StyBkDetailComponent } from './sty-book/sty-bk-detail/sty-bk-detail.component';
import { StyBkDtOverviewComponent } from './sty-book/sty-bk-detail/sty-bk-dt-overview/sty-bk-dt-overview.component';
import { StyBkDtHostComponent } from './sty-book/sty-bk-detail/sty-bk-dt-host/sty-bk-dt-host.component';
import { StyBkDtReserveComponent } from './sty-book/sty-bk-detail/sty-bk-dt-reserve/sty-bk-dt-reserve.component';

@NgModule({
  declarations: [
    StyBookComponent,
    StyTripsComponent,
    StyBkSearchComponent,
    StyBkListComponent,
    StyBkListItemComponent,
    StyBkDetailComponent,
    StyBkDtOverviewComponent,
    StyBkDtHostComponent,
    StyBkDtReserveComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StayModule { }
