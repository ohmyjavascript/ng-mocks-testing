import { PhonePipe } from './../../pipes/phone.pipe';
import { ContactComponent } from './contact.component';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import {AppModule} from "../../app.module";
describe('Contact component ', () => {
  beforeEach(() => {
    return MockBuilder(ContactComponent, AppModule)
      .keep(PhonePipe)
  })
  it('should be defined', () => {
    const fixture = MockRender(ContactComponent);
    expect(fixture.componentInstance).toBeDefined();
  })

  it('should test the pipe to format phone number', () => {
    const fixture = MockRender(ContactComponent);
    const listEl = ngMocks.find(fixture, 'ul > li:nth-child(2)');
    expect(ngMocks.formatText(listEl)).toBe('Office: +1(412)-444-5678');
  })

  // it('should test the pipe to format phone number using jest extend', () => {
  //   const fixture = MockRender(ContactComponent);
  //   const listEl = ngMocks.find(fixture, 'ul > li:nth-child(2)');
  //   expect(listEl.nativeElement.innerHTML).toInclude('Office: +1(412)-444-5678');
  // })
})
