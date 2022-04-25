import { HighlightDirective } from './highlight.directive';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { Component } from "@angular/core";

@Component({
  template: `<div appHighlight></div>`
})
class TestComponent { }

describe('HighlightDirective', () => {
  beforeEach(() => {
    return MockBuilder(TestComponent).keep(HighlightDirective);
  })

  it('should render', () => {
    const fixture = MockRender(TestComponent);
    const highlight = ngMocks.get(
      ngMocks.find('div'),
      HighlightDirective
    )
    const el = ngMocks.find('div');
    ngMocks.trigger(el, 'mouseover');
    fixture.detectChanges();
    expect(highlight.isHover).toBeTruthy();
    ngMocks.trigger(el, 'mouseout');
    fixture.detectChanges();
    expect(highlight.isHover).toBeFalsy();
  });

  it('should test for the added class in DOM', () => {
    const fixture = MockRender(TestComponent);
    const el = ngMocks.find('div');
    ngMocks.trigger(el, 'mouseover');
    fixture.detectChanges();
    //console.log(ngMocks.formatHtml(fixture.debugElement))
    expect(ngMocks.formatHtml(fixture.debugElement)).toContain('box_shadow');
  })

})
