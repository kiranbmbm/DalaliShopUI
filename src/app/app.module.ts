import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Http Module 
import { HttpClientModule } from '@angular/common/http';

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
import {ErrorComponent} from './error/error.component';
import {FileNotFoundComponent} from './file-not-found/file-not-found.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { FiledownloadComponent } from './filedownload/filedownload.component';

// toaster related 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Popup modal 
// import { ScModalModule } from 'angular-5-popup/src/app/sc/modal/sc-modal.module';
import {NgbModule,NgbAlertModule,NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OwnersComponent,
    VendorsComponent,
    ClientsComponent,
    BuyersComponent,
    TransportersComponent,
    HelpersComponent,
    NoAccessComponent,
    ErrorComponent,
    FileNotFoundComponent,
    FiledownloadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    // ScModalModule ,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot(
      {
        timeOut: 2000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
      }
    ) ,// ToastrModule added
    RouterModule.forRoot([
      {path:'Home', component:HomeComponent},
      {path:'Owners', component:OwnersComponent},
      {path:'Vendors', component:VendorsComponent},
      {path:'Clients', component:ClientsComponent},
      {path:'Buyers', component:BuyersComponent},
      {path:'Transporters', component:TransportersComponent},
      {path:'Helpers', component:HelpersComponent},
      {path:'NoAccess',component:NoAccessComponent},
      {path:'FileNotFound',component:FileNotFoundComponent},
      {path:'Error',component:ErrorComponent},
      {path:'',redirectTo:'/Home',pathMatch:'full'},
      {path:'**',component:HomeComponent}   
     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
