import { ProductsComponent } from './../../components/products/products.component';
import { HomeComponent } from './home.component';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { AppModule } from '../../app.module';

describe('Home Component', () => {
  beforeEach(() => {
    return MockBuilder(HomeComponent, AppModule)
  })

  it('should be defined', () => {
    const fixture = MockRender(HomeComponent);
    expect(fixture.componentInstance).toBeDefined();
  })

  it('should render the products component', () => {
    const fixture = MockRender(HomeComponent);
    const productsEl = ngMocks.find(ProductsComponent);
    fixture.detectChanges();
    expect(productsEl).toBeDefined();
  })
})