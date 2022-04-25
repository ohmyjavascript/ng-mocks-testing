import { ProductsComponent } from './../../components/products/products.component';
import { HomeComponent } from './home.component';
import { MockBuilder, MockRender } from 'ng-mocks';
describe('Home Component', () => {
  beforeEach(() => {
    return MockBuilder(HomeComponent).mock(ProductsComponent)
  })
  it('should be defined', () => {
    const fixture = MockRender(ProductsComponent);
    expect(fixture.componentInstance).toBeDefined();
  })
})
