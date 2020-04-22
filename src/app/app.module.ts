import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path : '' , loadChildren : () => import('./public/public.module').then((m) => m.PublicModule)  },
  { path : 'sec' , loadChildren : () => import('./secure/secure.module').then((m) => m.SecureModule)  }
 ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 

}
