import { Injectable, signal } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);

  addToCart(product: Product){
    this.cart.set([...this.cart(), product]);
    
  }

  getItems(){
    return this.cart;
  }

  


  constructor() { }
}
