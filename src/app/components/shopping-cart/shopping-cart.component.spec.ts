import { ShoppingCartComponent } from './shopping-cart.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { mockCart } from '../../mocks';

describe('ShoppingCart', () => {
  beforeEach(() => {
    return MockBuilder(ShoppingCartComponent)
  })
  it('should be defined', () => {
    const fixture = MockRender(ShoppingCartComponent, {
      item: mockCart
    });
    expect(fixture.componentInstance).toBeDefined();
  })
})
