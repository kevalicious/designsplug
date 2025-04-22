import { Component, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-checkout',
  imports: [RouterLink],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  cartservice = inject(CartService);

  //flatrate
  flatRate = 500;
  
  total = computed(() => {
    let total = 0;
    for (const item of this.cartservice.cart()) {
      total += item.price;
    }
    //subtotal
    return total;


  })


  constructor(private cartService: CartService){}

  cartList = this.cartService.getItems();
  


}
