import { Product } from "./product.model";

export class CartItem {
        constructor( 
            public id: number, 
            public product: Product
        ){ }    
}