import { mockProduct, mockProducts } from './../../mocks/index';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ProductsComponent } from './products.component';
import {MockBuilder, MockRender, ngMocks} from "ng-mocks";
import { ProductService } from '../../services/product.service';
import { of, EMPTY } from 'rxjs';
import { cold } from 'jest-marbles';
import {AppModule} from "../../app.module";

describe('ProductsComponent', () => {

  beforeEach(() => MockBuilder(ProductsComponent, AppModule)
    .mock(ProductService, {
      getAllProducts: () => of(mockProducts)
    })
    .mock(ShoppingCartService, {
      addToCart: () => EMPTY
    })
  );

  it('should render the component', () => {
    const fixture = MockRender(ProductsComponent);
    expect(fixture).toBeDefined();
  });

  it('should have the products from service', () => {
    const fixture = MockRender(ProductsComponent);
    const component = fixture.componentInstance;
    const expected$ = cold('(a|)', { a: mockProducts });
    expect(component.products$).toBeObservable(expected$);
  })

  it('should handle add to cart', () => {

    const fixture = MockRender(ProductsComponent);
    const component = fixture.componentInstance;
    const shopService = ngMocks.findInstance(ShoppingCartService);
    const spy = jest.spyOn(shopService, 'addToCart');
    component.handleAddToCart(mockProduct);
    expect(spy).toHaveBeenCalled();
  })
})
