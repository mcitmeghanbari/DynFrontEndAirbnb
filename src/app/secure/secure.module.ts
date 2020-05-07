import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//--------------------------
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//--------------------------
import { SharedModule } from '../shared/shared.module';
//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------
import { SecureComponent } from './secure.component';
//----------------------------------------------------------------------------------------


const appRoutes: Routes = [
  { path : '' , loadChildren : () => import('../secure/stay/stay.module').then((m) => m.StayModule)  },
  { path : 'host' , loadChildren : () => import('../secure/host/host.module').then((m) => m.HostModule)  }
 ];


@NgModule({
  declarations: [
    SecureComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FormsModule, 
    ReactiveFormsModule,
    FontAwesomeModule                                        
  ],
  providers: [    
  ],
})
export class SecureModule { }
