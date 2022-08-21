import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format;
  constructor(private el: ElementRef) { }

  @HostListener('keyup') onBlur() {
    const value: string = this.el.nativeElement.value;
    console.log(this.format);
    if (this.format === 'uppercase') {
      this.el.nativeElement.value = value.toUpperCase();
    }
    else {
      this.el.nativeElement.value = value.toLowerCase();
    }
  }


}
