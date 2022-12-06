import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  showSecret:boolean = true;
  clickLogs:string[] = [];  

  constructor() {   
   }

  ngOnInit() {
  }

  addToLog()
  {
    let date = new Date();
    this.clickLogs.push(`${date.getDay()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    // console.log(`${date.getDay()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`); 
  }

}
