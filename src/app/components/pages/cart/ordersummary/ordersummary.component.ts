import { Component, inject, computed } from '@angular/core';
import { CartService } from '../../../../services/cart.service';
import { Product } from '../../../../product';

@Component({
  selector: 'app-ordersummary',
  imports: [],
  templateUrl: './ordersummary.component.html',
  styleUrl: './ordersummary.component.css'
})
export class OrdersummaryComponent {
  cartservice = inject(CartService);

  total = computed( ()=> {
    let total = 0;
    for(const item of this.cartservice.cart()){
      total += item.price;
    }
    return total;

  })

}
