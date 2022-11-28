import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSuccessHighlighter]'
})
export class SuccessHighlighterDirective {

  constructor(private el: ElementRef ) { 
    el.nativeElement.style.backgroundColor = 'lightgreen';
    
  }

}
