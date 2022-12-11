import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentHookComponent } from './parent-hook/parent-hook.component';
import { ChildHookComponent } from './child-hook/child-hook.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentHookComponent,
    ChildHookComponent,
    ChildViewComponent
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
