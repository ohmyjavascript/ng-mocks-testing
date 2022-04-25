import { cold } from 'jest-marbles';
import { mockProduct } from '../../mocks';
import { EMPTY, of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from './../../services/product.service';
import { ProductDetailComponent } from './product-detail.component';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { ActivatedRoute, RouterModule } from '@angular/router';
describe('Home Component', () => {
  beforeEach(() => {
    return MockBuilder(ProductDetailComponent)
      .keep(RouterModule)
      .keep(RouterTestingModule.withRoutes([]))
      .mock(ProductService, {
        getProductById: () => of(mockProduct)
      })
      .provide({
        provide: ActivatedRoute,
        useValue: {
          snapshot: { params: { id: '1' } }
        }
      })
  })
  it('should be defined', () => {
    const fixture = MockRender(ProductDetailComponent);
    expect(fixture.componentInstance).toBeDefined();
  });
  it('should get the route params', () => {
    const fixture = MockRender(ProductDetailComponent);
    const expected$ = cold('(a|)', { a: mockProduct });
    expect(fixture.componentInstance.productDetails$).toBeObservable(expected$);

  })
})
