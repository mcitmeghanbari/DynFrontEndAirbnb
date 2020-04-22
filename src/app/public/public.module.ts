import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//--- authentication
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthLoginComponent } from './authentication/auth-login/auth-login.component';
import { AuthSignupComponent } from './authentication/auth-signup/auth-signup.component';
//----------------------------------------------------------------------------------------

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticationComponent,
    AuthLoginComponent,
    AuthSignupComponent,
  ]
})
export class PublicModule { }
