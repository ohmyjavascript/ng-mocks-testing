import { AppModule } from './../../app.module';
import { NavbarComponent } from './navbar.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { of } from 'rxjs';
import { cold } from 'jest-marbles';
describe('Navbar component', () => {
  beforeEach(() => {
    return MockBuilder(NavbarComponent, AppModule)
      .mock(ShoppingCartService, {
        getCartCount$: () => of(1)
      }
      )
  })


  it('should be defined', () => {
    const fixture = MockRender(NavbarComponent);
    expect(fixture.componentInstance).toBeDefined();
  })

  it('should get the count', () => {
    const fixture = MockRender(NavbarComponent);
    const component = fixture.componentInstance;
    const expected$ = cold('(a|)', { a: 1 });
    expect(component.count$).toBeObservable(expected$);
  })
})
