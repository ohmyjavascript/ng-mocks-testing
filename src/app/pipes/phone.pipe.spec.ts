import { PhonePipe } from './phone.pipe';
import { MockBuilder, MockRender } from 'ng-mocks';
describe('Phone Pipe', () => {
  beforeEach(() => {
    return MockBuilder(PhonePipe).provide(PhonePipe)
  })
  it('should be defined', () => {
    const fixture = MockRender(PhonePipe);
    expect(fixture.componentInstance).toBeDefined();
  })
  it('should test the transform value', () => {
    const fixture = MockRender(PhonePipe);
    expect(fixture.componentInstance.transform('4161234567')).toBe('+1(416)-123-4567');
  })
})
