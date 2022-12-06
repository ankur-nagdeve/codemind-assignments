import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-change-child',
  templateUrl: './on-change-child.component.html',
  styleUrls: ['./on-change-child.component.css']
})
export class OnChangeChildComponent implements OnInit, OnChanges {
  @Input() selectedFood : string;
  @Input() personName:string;
 
  changeLogs:string[] = [];  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    for( let change in changes){
      const chng = changes[change];

      const{previousValue, currentValue, firstChange} = chng;             
      this.changeLogs.push(`${change}: currentValue = ${currentValue}, previousValue = ${previousValue}, firstChange = ${firstChange}`);   

    }    

  }


  ngOnInit() {
  }

  reset = () => {this.changeLogs = [];}

}
