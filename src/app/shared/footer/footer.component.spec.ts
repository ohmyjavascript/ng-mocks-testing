import { FooterComponent } from '../footer/footer.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import {AppModule} from "../../app.module";

describe('Footer Component', () => {
  beforeEach(() => MockBuilder(FooterComponent, AppModule))
  it('should be defined', () => {
    const fixture = MockRender(FooterComponent);
    expect(fixture.componentInstance).toBeDefined();
  })
})
