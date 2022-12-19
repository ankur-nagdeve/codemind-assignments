import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { FormsModule } from '@angular/forms';
import { PhoneNumeberValidatorDirective } from './phone-numeber-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    RegisterPatientComponent,
    TestCompComponent,
    PhoneNumeberValidatorDirective
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
