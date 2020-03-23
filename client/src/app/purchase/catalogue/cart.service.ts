import { CartItem } from "./cartItem.model";
import { ProductRepository } from './product.repository';
import { Product } from "./product.model";
import { Injectable } from "@angular/core";
import * as _ from 'lodash';

@Injectable()
export class Cart {
    constructor(private productRepository: ProductRepository){} 

    public cartItems: CartItem[] = [];

    get total(): number {
        return this.cartItems.reduce((total, cart) => total + cart.product.price, 0);
    }

    get currency(): string {
           return ( this.cartItems.length == 0) ? "" : this.cartItems[0].product.currency;
    }

    addCartItem(id?: string){   
         console.log(id);    
        this.productRepository.getProductById(id).subscribe(product => {
            
            //TODO: fix api to return one product instead of array
            product = product[0];

            let newId = this.createNewId();      
             console.log(newId);          
            this.cartItems.push(new CartItem(newId, product));
        }); 
    }

    private createNewId() : number {
        let maxId = _.max(this.cartItems.map(y => y.id));
        if(maxId == undefined){
            maxId = 0;
        }
        maxId++;

        return maxId;
    }

    deleteItem(id?: number){
         _.remove(this.cartItems, x => x.id == id);
    }
}