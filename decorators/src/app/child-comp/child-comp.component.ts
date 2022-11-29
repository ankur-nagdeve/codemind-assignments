import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

   @Input() allEmployees:Employee[];
  constructor() { }

  ngOnInit() {
  }

}
