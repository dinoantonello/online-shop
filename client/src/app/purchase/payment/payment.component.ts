import { Component } from '@angular/core';
import { Payment } from './payment.model';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
    constructor(public payment : Payment){  }
   
    onSubmit() {
      console.log(this.payment);
    }
}
