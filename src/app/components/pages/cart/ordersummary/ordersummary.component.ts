import { Component, inject, computed } from '@angular/core';
 import { CartService } from '../../../../services/cart.service';
 //import { Product } from '../../../../product';
 import { RouterLink } from '@angular/router';
 
 @Component({
   selector: 'app-ordersummary',
   imports: [RouterLink],
   templateUrl: './ordersummary.component.html',
   styleUrl: './ordersummary.component.css'
 })
 export class OrdersummaryComponent {
   cartservice = inject(CartService);
 
  
 
 }