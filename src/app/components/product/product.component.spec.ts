import { Product } from './../../models/product.model';
import { RouterLink, RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { ProductComponent } from './product.component';
import { mockProduct } from '../../mocks';


describe('ProductComponent', () => {

  beforeEach(() => {
    return MockBuilder(ProductComponent)
      .mock(MatCardModule)
      .mock(MatChipsModule)
      .mock(RouterModule)
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
