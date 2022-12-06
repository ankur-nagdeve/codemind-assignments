import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnChangeParentComponent } from './OnChange/on-change-parent/on-change-parent.component';
import { OnChangeChildComponent } from './OnChange/on-change-child/on-change-child.component';
import { DirectiveComponent } from './Directives/directive/directive.component';

@NgModule({
  declarations: [
    AppComponent,    
    OnChangeParentComponent,
    OnChangeChildComponent,
    DirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
