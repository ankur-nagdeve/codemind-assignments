import { Component, OnInit } from '@angular/core';
import { Course } from '../Models/Course';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  

 Courses: Course[] =[
    {CourseName : "Java",AutthorName : "John Snow",Duration: "2 months",Fees : 10000} , 
    {CourseName : "Python",AutthorName : "Dinarys Tagerian",Duration: "6 months",Fees : 15000}  ,
    {CourseName : "Angular",AutthorName : "Jimmy Lenister",Duration: "4 months",Fees : 20000}  
  ]

  constructor() { }

  ngOnInit() {
  }

}
