import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {

  parentEmployeeList:Employee[]=[];
  constructor() { }

  ngOnInit() {
  }

  generateParentList=(emp:Employee)=>{
    console.log('Received from child');
    console.log(emp);
    this.parentEmployeeList.push(emp);
    console.log(this.parentEmployeeList);
  }

}
