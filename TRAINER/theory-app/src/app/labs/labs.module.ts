import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewLabsComponent } from './overview-labs/overview-labs.component';



@NgModule({
  declarations: [OverviewLabsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OverviewLabsComponent
  ]
})
export class LabsModule { }
