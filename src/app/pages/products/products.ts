import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Products } from '../../services/products';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-products',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Product implements OnInit {

  products: any[] = [];

  constructor(
    private Service: Products,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  //ngOnInit() {
   // console.log('ngOnInit called!'); 
  //  this.Service.getAllProducts().subscribe(res => {
   //   console.log(res);
   //   this.products = res.products;
   //   this.cdr.detectChanges(); 
   // });
   ngOnInit() {
    this.Service.getAllProducts().subscribe(res => {
      this.products = res.products;
      this.cdr.detectChanges(); 
    });
  }

  goToProduct(id: string) {
    this.router.navigate(['/productdetails'], {
      queryParams: { id }
    });
  }
}
