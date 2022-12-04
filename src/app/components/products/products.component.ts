import { Product } from './../../models/product.model';
import { Cart } from './../../models/cart.model';
import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Observable } from 'rxjs';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$!: Observable<Product[]>;
  constructor(private productService: ProductService,
    private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.products$ = this.productService.getAllProducts();
  }

  handleAddToCart(product: Product) {
    const cartItem: Cart = {
      category: product.category,
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price
    }
    this.shoppingCartService.addToCart(cartItem);
  }

}
