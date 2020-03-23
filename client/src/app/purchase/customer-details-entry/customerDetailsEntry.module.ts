import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomerDetailsEntryComponent } from './customerDetailsEntry.component';
import {FormsModule} from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetails } from './customer-details.model';

@NgModule({
  declarations: [CustomerDetailsEntryComponent],
  imports: [BrowserModule, FormsModule, RouterModule],
  providers: [CustomerDetails],
  bootstrap: [CustomerDetailsEntryComponent] 
})
export class CustomerDetailsEntryModule { }
