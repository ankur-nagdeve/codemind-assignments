import { createViewChild } from '@angular/compiler/src/core';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChildViewComponent } from '../child-view/child-view.component';

@Component({
  selector: 'app-child-hook',
  templateUrl: './child-hook.component.html',
  styleUrls: ['./child-hook.component.css']
})
export class ChildHookComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  @Input() incomingBg: string;
  @Input() incomingClickLog: number[]
  @ContentChild('pmsg',{static:true}) parentMsg: ElementRef
  @ViewChild(ChildViewComponent,{static:false}) childView : ChildViewComponent;

  constructor() {  
    console.log(" Child constructor called.")
   }
  ngOnDestroy(): void {
    console.log(" Child ngOnDestroy called.")
  }
  ngAfterViewChecked(): void {
    console.log(" Child ngAfterViewChecked called." + this.childView.yourName)
  }
  ngAfterViewInit(): void {
    console.log(" Child ngAfterViewInit called." + this.childView.yourName)
  }

  ngAfterContentChecked(): void {
    console.log(" Child ngAfterContentChecked called.")
    //console.log(this.parentMsg.nativeElement.innerHTML)
  }

  ngAfterContentInit(): void {
      console.log("Child AfterContentInit called.");
      //console.log(this.parentMsg.nativeElement.innerHTML)
  }
  ngDoCheck(): void {
    console.log('Child DoCheck called.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("child onchange called "+ this.incomingBg);
  }

  ngOnInit() {
    
    console.log(" Child ngOnInit called.")
  }

}
