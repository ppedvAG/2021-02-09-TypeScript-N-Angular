import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from '../labs/card/card.component';
import { DiashowComponent } from '../labs/diashow/diashow.component';
import { DiceComponent } from '../labs/dice/dice.component';
import { FormsComponent } from '../labs/forms/forms.component';
import { OverviewLabsComponent } from '../labs/overview-labs/overview-labs.component';
import { PwConfirmComponent } from '../labs/pw-confirm/pw-confirm.component';
import { TimeComponent } from '../labs/time/time.component';
import { TimerComponent } from '../labs/timer/timer.component';
import { OverviewTodosComponent } from '../todos/overview-todos/overview-todos.component';
import { RatingComponent } from '../todos/rating/rating.component';
import { TodoRowComponent } from '../todos/todo-row/todo-row.component';

const routes: Routes = [
  { path: 'todos', component: OverviewTodosComponent,
children: [
  { path: 'rating', component: RatingComponent},
  { path: 'todo-row', component: TodoRowComponent}
] },
  { path: 'labs', component: OverviewLabsComponent,
  children: [
    { path: 'card', component: CardComponent},
    { path: 'diashow', component: DiashowComponent},
    { path: 'dice', component: DiceComponent},
    { path: 'forms', component: FormsComponent},
    { path: 'pw-confirm', component: PwConfirmComponent},
    { path: 'time', component: TimeComponent},
    { path: 'timer', component: TimerComponent}
  ]  },
  { path: 'home', redirectTo: '' },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
