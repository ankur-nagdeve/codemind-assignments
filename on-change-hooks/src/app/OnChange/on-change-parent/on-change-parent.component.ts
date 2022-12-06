import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-change-parent',
  templateUrl: './on-change-parent.component.html',
  styleUrls: ['./on-change-parent.component.css']
})
export class OnChangeParentComponent implements OnInit {

  constructor() { }
  foodItem:string;
  foodieName:string;

  ngOnInit() {
  }

  setfoodValue(eventVal:string){
    this.foodItem = eventVal;

  }

  setName(name:string){

    this.foodieName = name;
  }

}
