import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LabsModule } from '../labs/labs.module';
import { TodosModule } from '../todos/todos.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LabsModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
