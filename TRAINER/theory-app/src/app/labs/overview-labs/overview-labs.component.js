"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverviewLabsComponent = void 0;
const core_1 = require("@angular/core");
const diashow_component_1 = require("../diashow/diashow.component");
let OverviewLabsComponent = class OverviewLabsComponent {
    //#endregion CARDS
    constructor() {
        //#region CARDS
        this.diamonds = 'diamonds';
        //#region DIASHOW
        this.diashow = diashow_component_1.DiashowComponent;
        //#endregion DIASHOW
        //#region TIMER
        this.startMessage = '';
        this.tickMessage = '';
        this.threeSecondsMessage = '';
        this.endMessage = '';
    }
    ngOnInit() {
        console.log('this.diashow', this.diashow);
    }
    destroyDiashow() {
        this.diashow = null;
    }
    handleStart() {
        this.startMessage = 'Timer gestartet';
    }
    handleTick(seconds) {
        this.tickMessage = `Geblieben: ${seconds}`;
        if (seconds === 3)
            this.threeSecondsMessage = '3 Sekunden geblieben';
    }
    handleEnd(msg) {
        this.endMessage = msg;
    }
};
OverviewLabsComponent = __decorate([
    core_1.Component({
        selector: 'app-overview-labs',
        templateUrl: './overview-labs.component.html',
        styleUrls: ['./overview-labs.component.css']
    })
], OverviewLabsComponent);
exports.OverviewLabsComponent = OverviewLabsComponent;
