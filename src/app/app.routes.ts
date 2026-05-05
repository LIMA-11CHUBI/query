import { Routes } from '@angular/router';
import { Product } from './pages/products/products';
import { Productdetails } from './pages/productdetails/productdetails';

export const routes: Routes = [
  { path: '', component: Product },
  { path: 'productdetails', component: Productdetails }
];
