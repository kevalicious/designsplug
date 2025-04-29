import { Component,  OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
//import { Product } from '../../../product';
import { ProductService } from '../../../services/product.service';
import { CartService } from '../../../services/cart.service';


@Component({
  selector: 'app-productdetails',
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit{
  product: any;

  cartservice = inject(CartService);

  constructor(private activeRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
     let productId = this.activeRoute.snapshot.paramMap.get('productId');
     this.productService.getProductbyId(productId).subscribe((data) => {
     this.product = data.result;
    
    });
    /*  productId && this.productService.getProductbyId(productId).subscribe((response)=>{ 
         this.product = response;
         console.log(response);
      }) */
  }


  
  

}
