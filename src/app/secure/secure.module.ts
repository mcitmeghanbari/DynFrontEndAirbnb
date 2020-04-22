import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//--------------------------
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
//--------------------------
import { SharedModule } from '../shared/shared.module';
//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------
import { SecureComponent } from './secure.component';
//----------------------------------------------------------------------------------------

const appRoutes: Routes = [
  { path : '' , component : SecureComponent},
  { path : 'register' , component : SecureComponent}
];


@NgModule({
  declarations: [
    SecureComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,    
    FormsModule,
    RouterModule.forRoot(appRoutes),
    SharedModule
  ]
})
export class SecureModule { }
