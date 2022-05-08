import { PhonePipe } from './phone.pipe';
import {MockBuilder, MockRender, ngMocks} from 'ng-mocks';
describe('Phone Pipe', () => {
  beforeEach(() => {
    return MockBuilder(PhonePipe).provide(PhonePipe)
  })
  it('should be defined', () => {
    const fixture = MockRender(PhonePipe);
    expect(fixture.point.componentInstance).toBeDefined();
  })
  it('should test the transform value', () => {
    const fixture = MockRender('{{ "4161234567" | phone }}');
    expect(ngMocks.formatText(fixture)).toBe('+1(416)-123-4567');
  })
})
