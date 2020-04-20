import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//--- header
import { HeaderComponent } from './header/header.component';
import { HeaderNavbarComponent } from './header/header-navbar/header-navbar.component';
//----------------------------------------------------------------------------------------

//--- security
import { SecurityComponent } from './security/security.component';
import { SecLoginComponent } from './security/sec-login/sec-login.component';
import { SecSignupComponent } from './security/sec-signup/sec-signup.component';
//----------------------------------------------------------------------------------------

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderNavbarComponent,
    SecurityComponent,
    SecLoginComponent,
    SecSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
