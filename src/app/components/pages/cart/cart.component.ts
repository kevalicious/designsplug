import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';


@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  

  constructor(private cartService: CartService){}
  
  cartList = this.cartService.getItems();
  
  



}
