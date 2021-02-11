import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewTodosComponent } from './overview-todos/overview-todos.component';



@NgModule({
  declarations: [OverviewTodosComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OverviewTodosComponent
  ]
})
export class TodosModule { }
