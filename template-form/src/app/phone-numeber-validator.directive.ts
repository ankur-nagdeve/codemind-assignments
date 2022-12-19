import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appPhoneNumeberValidator]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:PhoneNumeberValidatorDirective,
    multi:true
  }]
})
export class PhoneNumeberValidatorDirective implements Validator {

  constructor() { }

  validate(form:FormControl){

    let inputNumber:String = form.value;

     if (isNaN(Number(inputNumber))){
      return { 'invalid': true, 'errorText':' Phone number should be numeric.' }
     }

     if (inputNumber &&  inputNumber.length != 10){
      return { 'invalid': true,'errorText':' Phone number should be 10 digit.' }
     }

    return null;
  }

}
