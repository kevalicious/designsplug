import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'designsplug';

  cartservice = inject(CartService);
  cartList = this.cartService.getItems();
  
  

	
  
  
  constructor(private cartService: CartService){}
}
