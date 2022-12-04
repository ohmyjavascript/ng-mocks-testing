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
    const highlightDirective = ngMocks.get(
      ngMocks.find('div'),
      HighlightDirective
    )
    const el = ngMocks.find('div');
    ngMocks.trigger(el, 'mouseover');
    fixture.detectChanges();
    expect(highlightDirective.isHover).toBeTruthy();
    ngMocks.trigger(el, 'mouseout');
    fixture.detectChanges();
    expect(highlightDirective.isHover).toBeFalsy();
  });

  it('should find the extra class in DOM on hover', () => {
    const fixture = MockRender(TestComponent);
    const el = ngMocks.find('div');
    ngMocks.trigger(el, 'mouseover');
    fixture.detectChanges();
    expect(ngMocks.formatHtml(fixture)).toContain('box_shadow');
  })

  it('should remove the extra class in DOM on hover out', () => {
    const fixture = MockRender(TestComponent);
    const el = ngMocks.find('div');
    ngMocks.trigger(el, 'mouseover');
    fixture.detectChanges();

    ngMocks.trigger(el, 'mouseout');
    fixture.detectChanges();
    expect(ngMocks.formatHtml(fixture)).not.toContain('box_shadow');
  })

})