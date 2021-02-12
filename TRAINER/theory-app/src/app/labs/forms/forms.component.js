"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormsComponent = void 0;
const core_1 = require("@angular/core");
let FormsComponent = class FormsComponent {
    constructor() { }
    ngOnInit() {
        console.log('this.inputValue', this.inputValue);
    }
    handleInput() {
        console.log('this.inputValue', this.inputValue);
    }
    handleNgSubmit(formValue) {
        console.log('formValue', formValue);
    }
    handleColorInput(inp) {
        console.log('inp', inp);
    }
};
FormsComponent = __decorate([
    core_1.Component({
        selector: 'app-forms',
        templateUrl: './forms.component.html',
        styles: []
    })
], FormsComponent);
exports.FormsComponent = FormsComponent;
