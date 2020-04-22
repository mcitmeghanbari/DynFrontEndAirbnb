import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SharedComponent } from './shared.component';

//--- header
import { HeaderComponent } from './header/header.component';
import { HeaderNavbarComponent } from './header/header-navbar/header-navbar.component';
//----------------------------------------------------------------------------------------

//--- footer
import { FooterComponent } from './footer/footer.component';
//----------------------------------------------------------------------------------------

@NgModule({
  declarations: [
    SharedComponent,
    HeaderComponent,
    HeaderNavbarComponent,
    FooterComponent
  ],
  imports: [    
  ]
})
export class SharedModule { }
