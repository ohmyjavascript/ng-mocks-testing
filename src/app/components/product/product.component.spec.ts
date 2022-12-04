import { MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { ProductComponent } from './product.component';
import { mockProduct } from '../../mocks';
import { AppModule } from '../../app.module';
import { Product } from '../../models/product.model';

describe('ProductComponent', () => {
  let fixture: MockedComponentFixture<ProductComponent, {
    product: Product,
    onAddToCart: () => {}
  }>;
  ngMocks.faster();

  beforeAll(() => MockBuilder(ProductComponent, AppModule));
  beforeAll(() => {
    fixture = MockRender(ProductComponent, {
      product: mockProduct,
      onAddToCart: jest.fn(),
    })
  });

  it('should be defined', () => {
    expect(fixture.point.componentInstance).toBeDefined();
  });

  it('should test the Input property', () => {
    const component = fixture.componentInstance;
    expect(component.product).toBe(mockProduct);
  });

  it('should test the Output property', () => {
    const component = fixture.componentInstance;
    const buttonEl = ngMocks.find('button');
    ngMocks.click(buttonEl);
    expect(component.onAddToCart).toHaveBeenCalled();
  });

});
