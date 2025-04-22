import { Component, inject, input } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Product } from '../../../product';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';


@Component({
  selector: 'app-cart',
  imports: [OrdersummaryComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  

  constructor(private cartService: CartService){}
  
  cartList = this.cartService.getItems();

  item = input.required<Product>();

  cartservice = inject(CartService);
  
  



}
