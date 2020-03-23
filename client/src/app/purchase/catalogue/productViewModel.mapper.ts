import { Product } from "./product.model";
import { ProductViewModel } from "./product.viewModel";

export class ProductViewModelMapper{
    ConvertToProductViewModel(product: Product): ProductViewModel {        
        return  new ProductViewModel(product.id, product.name, "", product.currency, product.price);
    }

    ConvertToProductsViewModel(products: Product[]): ProductViewModel[] {        
        return  products.map(product =>  this.ConvertToProductViewModel(product));
    }    
}