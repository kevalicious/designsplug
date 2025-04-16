import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { ProductdetailsComponent } from './components/pages/productdetails/productdetails.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';

export const routes: Routes = [
   {path:'home', component: HomeComponent},
   {path:'products', component: ProductsComponent},
   {path:'productdetails/:id', component: ProductdetailsComponent},
   {path:'cart', component: CartComponent},
   {path:'checkout', component: CheckoutComponent},
   {path: '', redirectTo: '/home', pathMatch: 'full'},
   {path:'**', component: PagenotfoundComponent}

];
