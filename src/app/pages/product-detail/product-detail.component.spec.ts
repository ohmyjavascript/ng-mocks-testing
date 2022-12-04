import { cold } from 'jest-marbles';
import { mockProduct } from '../../mocks';
import { EMPTY, of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from './../../services/product.service';
import { ProductDetailComponent } from './product-detail.component';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AppModule } from '../../app.module';

describe('Home Component', () => {
  beforeEach(() => {
    return MockBuilder(ProductDetailComponent, AppModule)
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

  it('should display the selected product details', () => {
    const fixture = MockRender(ProductDetailComponent);
    const expected$ = cold('(a|)', { a: mockProduct });
    expect(fixture.componentInstance.productDetails$).toBeObservable(expected$);
  })

  it('should render the item in DOM', () => {
    const fixture = MockRender(ProductDetailComponent);
    const imageEl = ngMocks.find('img');
    fixture.detectChanges();
    expect(imageEl).toBeDefined();
  })
})