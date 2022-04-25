import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private _cartItems: Cart[] = [];
  private cartCount$ = new BehaviorSubject<number>(0);
  private cartItem$ = new Subject<Cart>();

  constructor() { }

  getCartCount$() {
    return this.cartCount$.asObservable();
  }

  getAllCartItems() {
    return this._cartItems;
  }

  addToCart(item: Cart) {
    this.cartCount$.next(this.cartCount$.value + 1);
    this.cartItem$.next(item);
    this._cartItems.push(item);
  }

}
