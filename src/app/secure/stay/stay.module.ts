import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//--------------------------
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------
import { StayComponent } from './stay.component';
import { StyBookComponent } from './sty-book/sty-book.component';
import { StyTripsComponent } from './sty-trips/sty-trips.component';
//--------------------------
import { StyBkSearchComponent } from './sty-book/sty-bk-search/sty-bk-search.component';
import { StyBkListComponent } from './sty-book/sty-bk-list/sty-bk-list.component';
import { StyBkListItemComponent } from './sty-book/sty-bk-list-item/sty-bk-list-item.component';
import { StyBkDetailComponent } from './sty-book/sty-bk-detail/sty-bk-detail.component';

import { StyBkDtOverviewComponent } from './sty-book/sty-bk-detail/sty-bk-dt-overview/sty-bk-dt-overview.component';
import { StyBkDtReserveComponent } from './sty-book/sty-bk-detail/sty-bk-dt-reserve/sty-bk-dt-reserve.component';
import { StyBkDtPhotosComponent } from './sty-book/sty-bk-detail/sty-bk-dt-photos/sty-bk-dt-photos.component';

import { StyBkDtOvSummaryComponent } from './sty-book/sty-bk-detail/sty-bk-dt-overview/sty-bk-dt-ov-summary/sty-bk-dt-ov-summary.component';

import { StyTrpListComponent } from './sty-trips/sty-trp-list/sty-trp-list.component';
import { StyTrpListItemComponent } from './sty-trips/sty-trp-list-item/sty-trp-list-item.component';
import { StyTrpDetailComponent } from './sty-trips/sty-trp-detail/sty-trp-detail.component';
//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------
import { DatabaseService } from '../services/database.service';


//----------------------------------------------------------------------------------------


const appRoutes: Routes = [
  {
    path: '', component: StayComponent, children: [
      {
        path: '', component: StyBookComponent, children: [
          { path: '', component: StyBkListComponent },
          { path: 'details/:i', component: StyBkDetailComponent }]
      },
      {
        path: 'trips', component: StyTripsComponent, children: [
          { path: '', component: StyTrpListComponent },
          { path: 'details/:i', component: StyTrpDetailComponent }]
      }
    ]
  }
];

@NgModule({
  declarations: [
    StayComponent,
    StyBookComponent,
    StyTripsComponent,
    StyBkSearchComponent,
    StyBkListComponent,
    StyBkListItemComponent,
    StyBkDetailComponent,
    StyBkDtOverviewComponent,
    StyBkDtOvSummaryComponent,
    StyBkDtReserveComponent,
    StyBkDtPhotosComponent,
    StyTrpListComponent,
    StyTrpListItemComponent,
    StyTrpDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DatabaseService
  ],
})
export class StayModule { }
