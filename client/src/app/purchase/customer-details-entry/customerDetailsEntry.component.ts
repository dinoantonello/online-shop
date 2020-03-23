import { Component } from '@angular/core';
import { CustomerDetails } from './customer-details.model';
import { Router } from '@angular/router';
@Component({
  selector: 'customer-details-entry',
  templateUrl: './customer-details-entry.component.html',
  styleUrls: ['./customer-details-entry.component.css']
})
export class CustomerDetailsEntryComponent {
    constructor(public customerDetails : CustomerDetails, public router : Router){  }
   
    onSubmit() {
      console.log(this.customerDetails);
      this.router.navigate(['./payment']);
    }
}
