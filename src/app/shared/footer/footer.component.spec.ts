import { FooterComponent } from '../footer/footer.component';
import { MockBuilder, MockRender } from 'ng-mocks';

describe('Footer Component', () => {
  beforeEach(() => {
    return MockBuilder(FooterComponent)
  })
  it('should be defined', () => {
    const fixture = MockRender(FooterComponent);
    expect(fixture.componentInstance).toBeDefined();
  })
})
