import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CatalogueComponent } from './catalogue.component';
import { ProductRepository } from './product.repository';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ProductViewModelMapper } from './productViewModel.mapper';
import { Cart } from './cart.service';
import { CartSummaryModule } from '../cart-summary/cartSummary.module';

@NgModule({
  declarations: [CatalogueComponent],
  imports: [BrowserModule, HttpClientModule, CartSummaryModule, RouterModule],
  exports: [CatalogueComponent],
  providers: [ProductViewModelMapper, Cart, ProductRepository, HttpClient],
  bootstrap: [CatalogueComponent] 
})
export class CatalogueModule { }
