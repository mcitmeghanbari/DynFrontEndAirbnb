import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//--- header
import { HeaderComponent } from './header/header.component';
import { HeaderNavbarComponent } from './header/header-navbar/header-navbar.component';
//----------------------------------------------------------------------------------------

//--- footer
import { FooterComponent } from './footer/footer.component';
//----------------------------------------------------------------------------------------

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    HeaderNavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
