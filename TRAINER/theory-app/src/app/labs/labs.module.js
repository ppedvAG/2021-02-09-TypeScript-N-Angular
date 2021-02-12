"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabsModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const overview_labs_component_1 = require("./overview-labs/overview-labs.component");
const time_component_1 = require("./time/time.component");
const card_component_1 = require("./card/card.component");
const diashow_component_1 = require("./diashow/diashow.component");
const dice_component_1 = require("./dice/dice.component");
const timer_component_1 = require("./timer/timer.component");
const forms_component_1 = require("./forms/forms.component");
const forms_1 = require("@angular/forms");
const pw_confirm_component_1 = require("./pw-confirm/pw-confirm.component");
const material_component_1 = require("./material/material.component");
const button_1 = require("@angular/material/button");
const checkbox_1 = require("@angular/material/checkbox");
const input_1 = require("@angular/material/input");
const toolbar_1 = require("@angular/material/toolbar");
const list_1 = require("@angular/material/list");
// import { MatPseudoCheckboxModule } from '@angular/material/core';
let LabsModule = class LabsModule {
};
LabsModule = __decorate([
    core_1.NgModule({
        declarations: [
            overview_labs_component_1.OverviewLabsComponent,
            time_component_1.TimeComponent,
            card_component_1.CardComponent,
            diashow_component_1.DiashowComponent,
            dice_component_1.DiceComponent,
            timer_component_1.TimerComponent,
            forms_component_1.FormsComponent, pw_confirm_component_1.PwConfirmComponent, material_component_1.MaterialComponent
        ],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            button_1.MatButtonModule,
            checkbox_1.MatCheckboxModule,
            list_1.MatListModule,
            input_1.MatInputModule,
            toolbar_1.MatToolbarModule
        ],
        exports: [
            overview_labs_component_1.OverviewLabsComponent
        ]
    })
], LabsModule);
exports.LabsModule = LabsModule;
