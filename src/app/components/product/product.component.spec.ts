import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { ProductComponent } from './product.component';
import { mockProduct } from '../../mocks';
import {AppModule} from "../../app.module";


describe('ProductComponent', () => {

  beforeEach(() => {
    return MockBuilder(ProductComponent, AppModule)
  });

  it('should be defined', () => {
    const fixture = MockRender(ProductComponent, {
      product: mockProduct,
      onAddToCart: jest.fn()
    });
    expect(fixture.point.componentInstance).toBeDefined();
  })

  it('should test the Input & Output property', () => {

    const onAddtoCartSpy = jest.fn();
    const fixture = MockRender(ProductComponent, {
      product: mockProduct,
      onAddToCart: onAddtoCartSpy
    });
    const component = fixture.componentInstance;
    expect(component.product).toBe(mockProduct);
    expect(onAddtoCartSpy).not.toHaveBeenCalled();
    const buttonEl = ngMocks.find('button');
    ngMocks.click(buttonEl);
    expect(onAddtoCartSpy).toHaveBeenCalled();
  })

})
