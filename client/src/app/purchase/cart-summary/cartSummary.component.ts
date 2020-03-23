import { Component } from '@angular/core';
import { Cart } from '../catalogue/cart.service';

@Component({
  selector: 'cart-summary',
  templateUrl: './cartSummary.component.html',
  styleUrls: ['./cartSummary.component.css']
})
export class CartSummaryComponent {
  constructor(public cart: Cart) {  }

  deleteItem(id: number){
    this.cart.deleteItem(id);
  }
}
