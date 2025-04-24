import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appResetLineHeight]',
  standalone: true,
})
export class ResetLineHeightDirective {
  private el = inject(ElementRef);
  constructor() {
    this.el.nativeElement.style.lineHeight = '1';
  }
}
