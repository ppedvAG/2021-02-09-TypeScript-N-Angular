import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewTodosComponent } from './overview-todos/overview-todos.component';
import { RatingComponent } from './rating/rating.component';
import { TodoRowComponent } from './todo-row/todo-row.component';



@NgModule({
  declarations: [OverviewTodosComponent, RatingComponent, TodoRowComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OverviewTodosComponent
  ]
})
export class TodosModule { }
