import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OverviewTodosComponent } from './overview-todos/overview-todos.component';
import { RatingComponent } from './rating/rating.component';
import { TodoRowComponent } from './todo-row/todo-row.component';
import { Rating2Component } from './rating2/rating2.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OverviewTodosComponent, 
    RatingComponent, 
    TodoRowComponent, 
    Rating2Component],
  imports: [
    CommonModule,
    FormsModule, 
    HttpClientModule
  ],
  exports: [
    OverviewTodosComponent
  ]
})
export class TodosModule { }
