import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submit(myForm:HTMLFormElement){
    console.log(myForm);
  }
}
