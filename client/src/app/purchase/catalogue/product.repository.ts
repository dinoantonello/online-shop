import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductRepository {
    constructor(private http: HttpClient) { }

    getProduct(): Observable<Product[]> {
        let apiURL = `http://localhost:3000/products`;
        return this.http.get<Product[]>(apiURL);
    }

    getProductById(id?: string): Observable<Product> {
        let apiURL = `http://localhost:3000/products?id=${id}`;
        return this.http.get<Product>(apiURL);
    }
}