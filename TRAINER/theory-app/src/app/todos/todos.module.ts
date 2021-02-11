import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewTodosComponent } from './overview-todos/overview-todos.component';
import { RatingComponent } from './rating/rating.component';



@NgModule({
  declarations: [OverviewTodosComponent, RatingComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OverviewTodosComponent
  ]
})
export class TodosModule { }
