
import { mockCart } from './../mocks/index';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { MockBuilder, ngMocks } from 'ng-mocks';
import { AppModule } from '../app.module';
import { cold } from 'jest-marbles';

describe('Shopping Cart service', () => {

  beforeEach(() => {
    return MockBuilder(ShoppingCartService, AppModule)
  })

  it('should add items to cart and get the count', () => {
    const service = ngMocks.findInstance(ShoppingCartService);
    service.addToCart(mockCart);
    const result$ = cold('a', { a: 1 });
    expect(service.getCartCount$()).toBeObservable(result$);
  })

  it('should get cart items to display', () => {
    const service = ngMocks.findInstance(ShoppingCartService);
    service.addToCart(mockCart);
    expect(service.getAllCartItems()).toStrictEqual([mockCart]);
  });
})