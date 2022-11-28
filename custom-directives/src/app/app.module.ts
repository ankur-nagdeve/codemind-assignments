import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { FormsModule } from '@angular/forms';
import { SuccessHighlighterDirective } from './success-highlighter.directive';
import { AlertHighlighterDirective } from './alert-highlighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveComponent,
    SuccessHighlighterDirective,
    AlertHighlighterDirective
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
