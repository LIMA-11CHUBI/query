import { ChangeDetectorRef, Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../services/products';



@Component({
  selector: 'app-productdetails',
  imports: [],
  standalone: true,
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.css',
})
export class Productdetails implements OnInit {

  product: any;

  constructor(
    private route: ActivatedRoute,
    private Service: Products,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      

      if (id) {
        this.Service.getProductById(id).subscribe(res => {
          this.product = res;
          this.cdr.detectChanges();
        });
      }
    });
  }
}
