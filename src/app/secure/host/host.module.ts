import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//--------------------------
import { Routes, RouterModule } from '@angular/router';
//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------
import { HostComponent } from './host.component';

import { HstBecomeComponent } from './hst-become/hst-become.component';
import { HstListingsComponent } from './hst-listings/hst-listings.component';
//--------------------------
import { HstBcRoomComponent } from './hst-become/hst-bc-room/hst-bc-room.component';
import { HstBcLocationComponent } from './hst-become/hst-bc-location/hst-bc-location.component';
import { HstBcAmenitiesComponent } from './hst-become/hst-bc-amenities/hst-bc-amenities.component';
import { HstBcPhotosComponent } from './hst-become/hst-bc-photos/hst-bc-photos.component';
import { HstBcTitleComponent } from './hst-become/hst-bc-title/hst-bc-title.component';
import { HstBcPriceComponent } from './hst-become/hst-bc-price/hst-bc-price.component';
import { HstBcCalendarComponent } from './hst-become/hst-bc-calendar/hst-bc-calendar.component';
//----------------------------------------------------------------------------------------

@NgModule({
  declarations: [
    HostComponent,
    HstBecomeComponent,
    HstListingsComponent,
    HstBcRoomComponent,
    HstBcLocationComponent,
    HstBcAmenitiesComponent,
    HstBcPhotosComponent,
    HstBcTitleComponent,
    HstBcPriceComponent,
    HstBcCalendarComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class HostModule { }
