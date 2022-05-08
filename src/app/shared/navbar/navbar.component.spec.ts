import { AppModule } from './../../app.module';
import { NavbarComponent } from './navbar.component';
import {MockBuilder, MockInstance, MockRender} from 'ng-mocks';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { of } from 'rxjs';
import { cold } from 'jest-marbles';

describe('Navbar component', () => {
  // the best way to customize instances is to use MockInstance
  MockInstance.scope();
  beforeEach(() => MockBuilder(NavbarComponent, AppModule))

  it('should be defined', () => {
    const fixture = MockRender(NavbarComponent);
    expect(fixture.componentInstance).toBeDefined();
  })

  it('should get the count', () => {
    // or Subject to control emits during the test
    MockInstance(ShoppingCartService, 'getCartCount$', () => of(1));

    const fixture = MockRender(NavbarComponent);
    const component = fixture.componentInstance;
    const expected$ = cold('(a|)', { a: 1 });
    expect(component.count$).toBeObservable(expected$);
  })
})
