import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent implements OnInit {

  passwordMatch = false;
  password:string = "";
  confirmPassword: string = "";

  companies :string[]=[
    "TCS",
    "Wipro",
    "Tech Mahindra",
    "LTI Mindtree",
    "Accenture",
    "Cognizant"
  ]

  constructor() { }

  ngOnInit() {
  }

}
