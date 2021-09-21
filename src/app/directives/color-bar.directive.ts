import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorBar]'
})
export class ColorBarDirective {

  constructor(elementRef:ElementRef) {
    elementRef.nativeElement.style.backgroundColor='lightCoral';
   }

}
