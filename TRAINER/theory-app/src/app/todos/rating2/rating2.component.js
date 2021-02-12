"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rating2Component = void 0;
const core_1 = require("@angular/core");
let Rating2Component = class Rating2Component {
    constructor() {
        this.starsNumber = 0;
        this.starsString = '';
        this.ratingChanged = new core_1.EventEmitter();
        console.log('this.starsNumber', this.starsNumber);
        this.starsString = '*'.repeat(this.starsNumber);
        console.log('this.starsString', this.starsString);
    }
    ngOnInit() {
        console.log('this.starsNumber', this.starsNumber);
        this.starsString = '*'.repeat(this.starsNumber);
        console.log('this.starsString', this.starsString);
    }
    handleInput() {
        console.log('input event triggered');
        console.log('this.starsNumber aus Rating2', this.starsNumber);
        this.ratingChanged.emit(this.starsNumber);
    }
};
__decorate([
    core_1.Input()
], Rating2Component.prototype, "starsNumber", void 0);
__decorate([
    core_1.Output()
], Rating2Component.prototype, "ratingChanged", void 0);
Rating2Component = __decorate([
    core_1.Component({
        selector: 'app-rating2',
        templateUrl: './rating2.component.html',
        styleUrls: ['./rating2.component.css']
    })
], Rating2Component);
exports.Rating2Component = Rating2Component;
