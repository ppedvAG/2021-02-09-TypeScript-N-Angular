import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewLabsComponent } from './overview-labs/overview-labs.component';
import { TimeComponent } from './time/time.component';
import { CardComponent } from './card/card.component';
import { DiashowComponent } from './diashow/diashow.component';
import { DiceComponent } from './dice/dice.component';
import { TimerComponent } from './timer/timer.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';
import { PwConfirmComponent } from './pw-confirm/pw-confirm.component';

@NgModule({
  declarations: [
    OverviewLabsComponent, 
    TimeComponent, 
    CardComponent, 
    DiashowComponent, 
    DiceComponent, 
    TimerComponent, 
    FormsComponent, PwConfirmComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    OverviewLabsComponent
  ]
})
export class LabsModule { }
