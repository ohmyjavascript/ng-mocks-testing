import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product: Product;
  @Output() onAddToCart = new EventEmitter<Product>();

  addToCart(product: Product) {
    this.onAddToCart.emit(product);
  }
}
