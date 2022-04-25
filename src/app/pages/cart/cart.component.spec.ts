import { mockShoppingCart } from './../../mocks/index';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ShoppingCartComponent } from './../../components/shopping-cart/shopping-cart.component';
import { CartComponent } from './cart.component';
import { MockBuilder, MockRender } from 'ng-mocks';
describe('Cart Component', () => {
  beforeEach(() => {
    return MockBuilder(CartComponent)
      .mock(ShoppingCartComponent)
      .mock(ShoppingCartService, {
        getAllCartItems: () => [...mockShoppingCart] as any
      });
  })

  it('should be defined', () => {
    const fixture = MockRender(CartComponent);
    expect(fixture.componentInstance).toBeDefined();
  })

  it('should populate the cart items', () => {
    const fixture = MockRender(CartComponent);
    const component = fixture.point.componentInstance;
    fixture.detectChanges();
    expect(component.cartItems.length).toBe(2);
  })
})
