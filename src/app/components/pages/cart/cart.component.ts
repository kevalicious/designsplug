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

   ngAfterViewInit() {

     //+/- productqty
     $('.btn-num-product-down').on('click', function(e){
          e.preventDefault();
          var numProduct = Number($(this).next().val());
          if(numProduct > 1) $(this).next().val(numProduct - 1);
      });

      $('.btn-num-product-up').on('click', function(e){
          e.preventDefault();
          var numProduct = Number($(this).prev().val());
          $(this).prev().val(numProduct + 1);
    });

   }
  

  constructor(private cartService: CartService){}
  
  cartList = this.cartService.getItems();

  item = input.required<Product>();

  cartservice = inject(CartService);
  
  



}
