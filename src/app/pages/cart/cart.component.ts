import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Cart } from './../../models/cart.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Cart[] = [];
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.cartItems = this.shoppingCartService.getAllCartItems();
  }

}
