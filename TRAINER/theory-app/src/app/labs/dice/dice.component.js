"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiceComponent = void 0;
const core_1 = require("@angular/core");
let DiceComponent = class DiceComponent {
    constructor() {
        this.info = '';
    }
    ngOnInit() {
    }
    wuerfeln() {
        this.zufallsZahl = Math.ceil(Math.random() * 6);
        this.info = `Gewürfelt! Es ist eine `;
    }
};
DiceComponent = __decorate([
    core_1.Component({
        selector: 'app-dice',
        templateUrl: './dice.component.html',
        styleUrls: ['./dice.component.css']
    })
], DiceComponent);
exports.DiceComponent = DiceComponent;