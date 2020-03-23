import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CartSummaryComponent } from './cartSummary.component';
import { Cart } from '../catalogue/cart.service';


@NgModule({
  declarations: [CartSummaryComponent],
  imports: [BrowserModule, RouterModule],
  exports: [CartSummaryComponent],
  providers: [Cart],
  bootstrap: [CartSummaryComponent] 
})
export class CartSummaryModule {
  
}
