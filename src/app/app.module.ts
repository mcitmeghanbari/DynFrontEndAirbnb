import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//--------------------------
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------
import { SharedModule } from './shared/shared.module';
//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------
import { AppComponent } from './app.component';
//----------------------------------------------------------------------------------------

import { TestComponent } from './test/test.component';


const appRoutes: Routes = [
  { path: '', loadChildren: () => import('./public/public.module').then((m) => m.PublicModule) },
  { path: 'sec', loadChildren: () => import('./secure/secure.module').then((m) => m.SecureModule) }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent   

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    SharedModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
