import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-hook',
  templateUrl: './parent-hook.component.html',
  styleUrls: ['./parent-hook.component.css']
})
export class ParentHookComponent implements OnInit {
  showChild= true;
  bloodGroup:string;
  clickLog: number[]= [];
  counter:number;
  constructor() {
    this.counter = 0; 
    console.log(" Parent constructor called." + this.counter);
  }

  ngOnInit() {       
    console.log(" Parent ngOnInit called.")
  }

  setBloodGroup =(bgValue:string)=>{
      this.bloodGroup = bgValue;
     // console.log(this.bloodGroup);
  }

  logClick=() =>{
      this.clickLog.push(this.counter++);
  }
}
