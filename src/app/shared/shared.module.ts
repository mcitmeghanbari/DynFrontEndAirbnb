import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//--------------------------

//--------------------------
import { SharedComponent } from './shared.component';
//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------
import { HeaderComponent } from './header/header.component';
import { HdrNavbarComponent } from './header/hdr-navbar/hdr-navbar.component';
//--------------------------
import { FooterComponent } from './footer/footer.component';
import { FtrNavlinksComponent } from './footer/ftr-navlinks/ftr-navlinks.component';
import { FtrSiteinfoComponent } from './footer/ftr-siteinfo/ftr-siteinfo.component';
//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------

@NgModule({
  declarations: [
    SharedComponent,
    HeaderComponent,
    HdrNavbarComponent,
    FooterComponent,
    FtrNavlinksComponent,
    FtrSiteinfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SharedComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    
  ]
})
export class SharedModule { }
