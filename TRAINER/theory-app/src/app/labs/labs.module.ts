import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewLabsComponent } from './overview-labs/overview-labs.component';
import { TimeComponent } from './time/time.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [OverviewLabsComponent, TimeComponent, CardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OverviewLabsComponent
  ]
})
export class LabsModule { }
