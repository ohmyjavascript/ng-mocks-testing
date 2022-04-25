import { AppModule } from './../app.module';
import { MockBuilder, MockRender } from 'ng-mocks';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { mockProducts, mockProduct } from '../mocks';
import { EMPTY } from 'rxjs';
describe('product Service', () => {
  beforeEach(() => {
    return MockBuilder(ProductService, AppModule).replace(
      HttpClientModule,
      HttpClientTestingModule
    )
  })
  it('should test getAllProducts', () => {
    const fixture = MockRender('');
    const service: ProductService = fixture.debugElement.injector.get(ProductService);
    const httpMock: HttpTestingController = fixture.debugElement.injector.get(HttpTestingController);

    let actual: any;
    service.getAllProducts().subscribe(value => actual = value);

    const req = httpMock.expectOne('https://fakestoreapi.com/products');
    expect(req.request.method).toEqual('GET');
    req.flush([...mockProducts]);
    httpMock.verify();
    expect(actual).toEqual(mockProducts);
  })

  it('should test getProductById', () => {
    const fixture = MockRender('');
    const service: ProductService = fixture.debugElement.injector.get(ProductService);
    const httpMock: HttpTestingController = fixture.debugElement.injector.get(HttpTestingController);

    let actual: any;
    service.getProductById('1').subscribe(value => actual = value);

    const req = httpMock.expectOne('https://fakestoreapi.com/products/1');
    expect(req.request.method).toEqual('GET');
    req.flush(mockProduct);
    httpMock.verify();
    expect(actual).toEqual(mockProduct);
  })

  it('should test addProductToDB', () => {
    const fixture = MockRender('');
    const service: ProductService = fixture.debugElement.injector.get(ProductService);
    const httpMock: HttpTestingController = fixture.debugElement.injector.get(HttpTestingController);

    let actual: any;
    service.addProductToDB(mockProduct).subscribe(value => actual = value);

    const req = httpMock.expectOne('https://fakestoreapi.com/products');
    expect(req.request.method).toEqual('POST');
    req.flush(EMPTY);
    httpMock.verify();
    expect(actual).toEqual(EMPTY);
  })
})
