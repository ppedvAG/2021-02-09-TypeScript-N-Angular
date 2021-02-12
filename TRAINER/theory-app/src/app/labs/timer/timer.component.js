"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimerComponent = void 0;
const core_1 = require("@angular/core");
// import * as EventEmitter from 'events';
let TimerComponent = class TimerComponent {
    // endMessage: string = '';
    constructor() {
        this.start = new core_1.EventEmitter();
        this.tick = new core_1.EventEmitter();
        this.end = new core_1.EventEmitter();
        this.remainingTime = 0;
    }
    ngOnInit() {
    }
    handleClick() {
        this.start.emit();
        this.remainingTime = this.time;
        this.intervalId = setInterval(() => {
            this.remainingTime--;
            this.tick.emit(this.remainingTime);
            if (this.remainingTime === 0) {
                this.end.emit('Zeit ist abgelaufen');
                clearInterval(this.intervalId);
            }
        }, 1000);
    }
};
__decorate([
    core_1.Input()
], TimerComponent.prototype, "time", void 0);
__decorate([
    core_1.Output()
], TimerComponent.prototype, "start", void 0);
__decorate([
    core_1.Output()
], TimerComponent.prototype, "tick", void 0);
__decorate([
    core_1.Output()
], TimerComponent.prototype, "end", void 0);
TimerComponent = __decorate([
    core_1.Component({
        selector: 'app-timer',
        templateUrl: './timer.component.html',
        styleUrls: ['./timer.component.css']
    })
], TimerComponent);
exports.TimerComponent = TimerComponent;
