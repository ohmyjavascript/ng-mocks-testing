import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  count$: Observable<number>;
  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
    this.count$ = this.cartService.getCartCount$()
  }

}
