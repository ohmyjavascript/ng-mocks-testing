import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('class.box_shadow') isHover = false;

  @HostListener('mouseover')
  onHover() {
    this.isHover = true;
  }

  @HostListener('mouseout')
  onLeave() {
    this.isHover = false;
  }

}
