import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAlertHighlighter]'
})
export class AlertHighlighterDirective {

  constructor(private el: ElementRef ) { 
    el.nativeElement.style.backgroundColor = 'Red';
    
  }

}
