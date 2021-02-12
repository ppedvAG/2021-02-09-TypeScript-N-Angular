"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const card_component_1 = require("../labs/card/card.component");
const diashow_component_1 = require("../labs/diashow/diashow.component");
const dice_component_1 = require("../labs/dice/dice.component");
const forms_component_1 = require("../labs/forms/forms.component");
const overview_labs_component_1 = require("../labs/overview-labs/overview-labs.component");
const pw_confirm_component_1 = require("../labs/pw-confirm/pw-confirm.component");
const time_component_1 = require("../labs/time/time.component");
const timer_component_1 = require("../labs/timer/timer.component");
const overview_todos_component_1 = require("../todos/overview-todos/overview-todos.component");
const rating_component_1 = require("../todos/rating/rating.component");
const todo_row_component_1 = require("../todos/todo-row/todo-row.component");
const routes = [
    { path: 'todos', component: overview_todos_component_1.OverviewTodosComponent,
        children: [
            { path: 'rating', component: rating_component_1.RatingComponent },
            { path: 'todo-row', component: todo_row_component_1.TodoRowComponent }
        ] },
    { path: 'labs', component: overview_labs_component_1.OverviewLabsComponent,
        children: [
            { path: 'card', component: card_component_1.CardComponent },
            { path: 'diashow', component: diashow_component_1.DiashowComponent },
            { path: 'dice', component: dice_component_1.DiceComponent },
            { path: 'forms', component: forms_component_1.FormsComponent },
            { path: 'pw-confirm', component: pw_confirm_component_1.PwConfirmComponent },
            { path: 'time', component: time_component_1.TimeComponent },
            { path: 'timer', component: timer_component_1.TimerComponent }
        ] },
    { path: 'home', redirectTo: '' },
    { path: '**', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
