import { Cart } from './../models/cart.model';
import { mockCart } from './../mocks/index';
import { ShoppingCartService } from '../services/shopping-cart.service';

describe('Shopping Cart service', () => {
  let shoppingCartService: ShoppingCartService;
  beforeEach(() => {
    shoppingCartService = new ShoppingCartService();
  })

  it('returns the cart count', () => {
    let cartCount: number | undefined;
    shoppingCartService.getCartCount$().subscribe(count => {
      cartCount = count;
    });
    expect(cartCount).toBe(0);
  })

  it('updates the count when items are added to shopping cart', () => {
    let cartCount: number | undefined;
    shoppingCartService.addToCart(mockCart);
    shoppingCartService.getCartCount$().subscribe(count => {
      cartCount = count;
    });
    expect(cartCount).toBe(1);
  })

  it('returns the cart items', () => {
    let cartItems: Cart[];
    cartItems = shoppingCartService.getAllCartItems();
    expect(cartItems.length).toBe(0);
  })

  it('updates the cart upon adding new items', () => {
    shoppingCartService.addToCart(mockCart);
    expect(shoppingCartService.getAllCartItems()).toStrictEqual([mockCart]);
  })
})
