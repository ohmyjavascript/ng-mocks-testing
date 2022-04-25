import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  @Input() item: Cart;
}
