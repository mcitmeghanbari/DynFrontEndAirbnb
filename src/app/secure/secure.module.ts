import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { SecureComponent } from './secure.component';


// const appRoutes: Routes = [
//   { path : '' , component : AuthtLoginComponent},
//   { path : 'register' , component : AuthtSignclsupComponent}
// ];


@NgModule({
  declarations: [],
  imports: [
    SecureComponent,
    SharedModule
  ]
})
export class SecureModule { }
