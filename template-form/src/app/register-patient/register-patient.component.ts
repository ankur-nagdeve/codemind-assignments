import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Patient } from '../patient';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent implements OnInit {
  
  genders = ["Female","Male","Other"];
  formSubmitted = false;

  patientGender = "Female";
  roomType = "default";

  patient:Patient;

  confirmPatientDetails: object[] = []

  currentDate =  new Date();
  constructor() { }
 
  ngOnInit() {
  }

  submitPatientDetails(enrForm:NgForm){
    
    console.log('Patient details submitted');                                                                         
    console.log(enrForm.value);
    let inputFormValue = enrForm.value;
    this.patient = new Patient();
    
    this.patient.firstName = inputFormValue.firstName;
    this.patient.lastName = inputFormValue.lastName;
    this.patient.gender = inputFormValue.patientGender;

    this.patient.address = inputFormValue.AddressGroup.address1 +' '+ inputFormValue.AddressGroup.address2;
    this.patient.emailId = inputFormValue.emailId;
    this.patient.constactNumber = inputFormValue.mobileNumber;

    this.patient.admissionDate = inputFormValue.admisssionDate;
    this.patient.roomType = inputFormValue.roomType;

    this.setConifrmPatientDetails(this.patient) 

    console.log(this.patient);
    
    this.formSubmitted = true;
    console.log(this.confirmPatientDetails);

    

    
  }
  
  

  setConifrmPatientDetails(admittedPatient:Patient){
    this.confirmPatientDetails.push(
      {name:"First Name:", value: admittedPatient.firstName },
      {name:"Last Name:", value: admittedPatient.lastName },
      {name:"Gender:", value: admittedPatient.gender },
      {name:"Address:", value: admittedPatient.address },
      {name:"Email Id:", value: admittedPatient.emailId },
      {name:"Contact Number:", value: admittedPatient.constactNumber },
      {name:"Admission Date:", value: admittedPatient.admissionDate },
      {name:"Room Type:", value: admittedPatient.roomType },
    )

  }
}
