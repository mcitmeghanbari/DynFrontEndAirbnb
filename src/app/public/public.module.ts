import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { PublicComponent } from './public.component';

import { AuthentictnComponent } from './authentictn/authentictn.component';
import { AuthtLoginComponent } from './authentictn/autht-login/autht-login.component';
import { AuthtSignupComponent } from './authentictn/autht-signup/autht-signup.component';
//----------------------------------------------------------------------------------------

const appRoutes: Routes = [
  { path : '' , component : AuthtLoginComponent},
  { path : 'register' , component : AuthtSignupComponent}
];

@NgModule({
  declarations: [
    PublicComponent,
    AuthentictnComponent,
    AuthtSignupComponent,
    AuthtLoginComponent
  ],
  imports: [    
    SharedModule
  ]
})
export class PublicModule { }
