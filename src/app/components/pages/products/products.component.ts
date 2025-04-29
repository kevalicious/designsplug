import { Component, OnInit, inject, input, signal } from '@angular/core';
import { Product } from '../../../product';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
//import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  async ngOnInit() {
    const res = await fetch(
      'http://localhost/designplug/api/products/viewproducts.php'
    );

    const data = await res.json();
    console.log(data[0]);
    this.products.set(data[0]);
  }


  products = signal<Product[]>([]);
 
  product = input.required<Product>();

  cartservice = inject(CartService);

  constructor(){

  }

 
  
  
  

}
