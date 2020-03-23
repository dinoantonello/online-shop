import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PaymentComponent } from './payment.component';
import {FormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';
import { Payment } from './payment.model';

@NgModule({
  declarations: [PaymentComponent],
  imports: [BrowserModule, FormsModule, RouterModule],
  providers: [Payment],
  bootstrap: [PaymentComponent] 
})
export class PaymentModule { }
