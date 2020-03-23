import { Component } from '@angular/core';
import { ProductViewModel } from './product.viewModel';
import { ProductRepository } from './product.repository';
import { ProductViewModelMapper } from './productViewModel.mapper';
import { Cart } from './cart.service';



@Component({
  selector: 'catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {
  title = 'catalogue';

  products: ProductViewModel[] = [];

  numberOfProducts: number = 0;

  constructor(private productRepository: ProductRepository, private cart: Cart, private productViewModelMapper: ProductViewModelMapper) {
        
         productRepository
            .getProduct()
            .subscribe( products => {
                  this.products = productViewModelMapper.ConvertToProductsViewModel(products) 
            });
    }


    addToCart(id){
     
      this.cart.addCartItem(id);
    }
}
