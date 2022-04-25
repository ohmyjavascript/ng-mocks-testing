
import { AppComponent } from './app.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';

describe('AppComponent', () => {

  beforeEach(() => {
    return MockBuilder(AppComponent)
      .mock(NavbarComponent)
      .mock(FooterComponent)
      .mock(RouterOutlet)
  })
  it('should be defined', () => {
    const fixture = MockRender(AppComponent);
    expect(fixture.point.componentInstance).toBeDefined();
  })
})


