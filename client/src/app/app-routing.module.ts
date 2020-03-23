import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsEntryComponent } from './purchase/customer-details-entry/customerDetailsEntry.component';
import { CatalogueComponent } from './purchase/catalogue/catalogue.component';
import { PaymentComponent } from './purchase/payment/payment.component';


const routes: Routes = [
  { path: '', redirectTo: '/catalogue', pathMatch: 'full' },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'customer-details-entry', component: CustomerDetailsEntryComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }