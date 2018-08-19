import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routing 
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OwnersComponent } from './owners/owners.component';
import { VendorsComponent } from './vendors/vendors.component';
import { ClientsComponent } from './clients/clients.component';
import { BuyersComponent } from './buyers/buyers.component';
import { TransportersComponent } from './transporters/transporters.component';
import { HelpersComponent } from './helpers/helpers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OwnersComponent,
    VendorsComponent,
    ClientsComponent,
    BuyersComponent,
    TransportersComponent,
    HelpersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'Home', component:HomeComponent},
      {path:'Owners', component:OwnersComponent},
      {path:'Vendors', component:VendorsComponent},
      {path:'Clients', component:ClientsComponent},
      {path:'Buyers', component:BuyersComponent},
      {path:'Transporters', component:TransportersComponent},
      {path:'Helpers', component:HelpersComponent},
      {path:'',redirectTo:'/Home',pathMatch:'full'},
      {path:'**',component:HomeComponent}   
     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
