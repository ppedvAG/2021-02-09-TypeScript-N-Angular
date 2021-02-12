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
import { MaterialComponent } from './material/material.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatList, MatListModule } from '@angular/material/list';
// import { MatPseudoCheckboxModule } from '@angular/material/core';

@NgModule({
  declarations: [
    OverviewLabsComponent, 
    TimeComponent, 
    CardComponent, 
    DiashowComponent, 
    DiceComponent, 
    TimerComponent, 
    FormsComponent, PwConfirmComponent, MaterialComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatInputModule,
    MatToolbarModule
  ],
  exports: [
    OverviewLabsComponent
  ]
})
export class LabsModule { }
