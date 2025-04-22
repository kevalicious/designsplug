import { Injectable, signal } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
    window.alert(product.product_name + ' has been added to cart!');
  }

  getItems() {
    return this.cart;
  }

  removefromCart(id: number){
    this.cart.set(this.cart().filter((p) => p.pid !== id));
  }

  
 




  constructor() { }
}
