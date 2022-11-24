import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})

export class RegistrationFormComponent {

  DefaultUser:string = "admin";
  NewUser:string = "";  

onRegisterClick(){

  this.NewUser= "";  

}

}
