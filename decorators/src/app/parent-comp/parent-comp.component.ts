import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {

  public singleEmployee:Employee = {employeeName: "", department :"",jobTitle:"",phoneNumber:""};
  employeeList: Employee[] = [];  

  constructor() { }

  ngOnInit() {    
  }

  SaveEmployee=(emp:Employee)=>{

       this.employeeList.push(emp);
      
      console.log(this.employeeList);

  }

}
