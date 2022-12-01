import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  @Output() EmployeeSavedFromChildEvent = new EventEmitter<Employee>();

  childEmployee:Employee;

  constructor() { }

  ngOnInit() {
  }

  SaveEmployee=(employeeName:string,department:string,jobTitle:string,phoneNumber:string)=>{
  
    this.childEmployee = {employeeName:employeeName,department:department,jobTitle:jobTitle,phoneNumber:phoneNumber};
    this.EmployeeSavedFromChildEvent.emit(this.childEmployee);
    // console.log(this.childEmployee);

}

}
