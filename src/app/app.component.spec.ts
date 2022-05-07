
import { AppComponent } from './app.component';
import { AppModule } from "./app.module";
import { MockBuilder, MockRender } from 'ng-mocks';

describe('AppComponent', () => {

  beforeEach(() => MockBuilder(AppComponent, AppModule))
  it('should be defined', () => {
    const fixture = MockRender(AppComponent);
    expect(fixture.point.componentInstance).toBeDefined();
  })
})


