import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//--------------------------
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------
import { SharedModule } from './shared/shared.module';
//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------
import { AppComponent } from './app.component';
//------------------------------------./shared/footer/ftr-navlinks/ftr-navlinks.component---------------

const appRoutes: Routes = [
  { path : '' , loadChildren : () => import('./public/public.module').then((m) => m.PublicModule)  },
  { path : 'sec' , loadChildren : () => import('./secure/secure.module').then((m) => m.SecureModule)  }
 ];

@NgModule({
  declarations: [
    AppComponent    
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    SharedModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
