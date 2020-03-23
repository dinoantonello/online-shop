import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CatalogueModule } from './purchase/catalogue/catalogue.module';
import { AppRoutingModule } from './app-routing.module';
import { CustomerDetailsEntryModule } from './purchase/customer-details-entry/customerDetailsEntry.module';
import { PaymentModule } from './purchase/payment/payment.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CatalogueModule, AppRoutingModule, CustomerDetailsEntryModule, PaymentModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
