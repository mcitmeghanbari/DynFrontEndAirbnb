import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//--------------------------
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
//--------------------------
import { SharedComponent } from './shared.component';
//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------
import { HeaderComponent } from './header/header.component';
import { HeaderNavbarComponent } from './header/header-navbar/header-navbar.component';
//--------------------------
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
    CommonModule,
    BrowserModule,    
    FormsModule
  ]
})
export class SharedModule { }
