import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LabsModule } from '../labs/labs.module';
import { TodosModule } from '../todos/todos.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LabsModule,
    TodosModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
