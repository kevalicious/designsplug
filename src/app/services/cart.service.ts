import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
    window.alert(product.name + ' has been added to cart!');
  }

  getItems() {
    return this.cart;
  }

  removefromCart(id: number){
    this.cart.set(this.cart().filter((p) => p.product_id !== id));
  }

  totalPrice = computed(() => {

        return this.cart().reduce((total, item) => total + Number(item.price), 0);
     
    });

  
 




  constructor() { }
}
