import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetails$: Observable<Product>;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    const routeId = this.route.snapshot.params['id'];
    this.productDetails$ = this.productService.getProductById(routeId);
  }

}
