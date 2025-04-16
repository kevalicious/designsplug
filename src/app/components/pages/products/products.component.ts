import { Component, OnInit, inject, input, signal } from '@angular/core';
//import { DataService } from '../../../data.service';
import { Product } from '../../../product';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products = signal<Product[]>([
    {
      "pid": 1,
      "product_name": "Product 1",
      "description": "Dining set high quality furniture.",
      "summary": "Summary goes here",
      "cover": "uploads/products/product1.jpg",
      "sku": "SKU goes here",
      "category": "dining sets",
      "price": 15000,
	  "instock":10,
      "created_at": "",
      "deleted_at": ""
    },
    {
      "pid": 2,
      "product_name": "Product 2",
      "description": "Dining set high quality furniture.",
      "summary": "Summary goes here",
      "cover": "uploads/products/product2.jpg",
      "sku": "SKU goes here",
      "category": "dining sets",
      "price": 18000,
	  "instock":6,
      "created_at": "",
      "deleted_at": ""
    },
    {
      "pid": 3,
      "product_name": "Product 3",
      "description": "Coffee table high quality furniture.",
      "summary": "Summary goes here",
      "cover": "uploads/products/product3.jpg",
      "sku": "SKU goes here",
      "category": "coffee tables",
      "price": 10000,
	  "instock":15,
      "created_at": "",
      "deleted_at": ""
    },
    {
      "pid": 4,
      "product_name": "Product 4",
      "description": "Beds high quality furniture.",
      "summary": "Summary goes here",
      "cover": "uploads/products/product4.jpg",
      "sku": "SKU goes here",
      "category": "Beds",
      "price": 16000,
	  "instock":0,
      "created_at": "",
      "deleted_at": ""
    }  

  ]);


  product = input.required<Product>();

  cartservice = inject(CartService);

  constructor(){

  }

  ngOnInit(): void{
      
  }
  

}
