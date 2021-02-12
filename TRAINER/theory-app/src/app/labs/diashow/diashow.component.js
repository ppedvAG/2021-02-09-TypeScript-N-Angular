"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiashowComponent = void 0;
const core_1 = require("@angular/core");
let DiashowComponent = class DiashowComponent {
    constructor() {
        this.images = [];
        this.activeImg = 0;
        console.log('Komponente instanziiert');
    }
    //   export declare interface OnInit {
    //     /**
    //      * A callback method that is invoked immediately after the
    //      * default change detector has checked the directive's
    //      * data-bound properties for the first time,
    //      * and before any of the view or content children have been checked.
    //      * It is invoked only once when the directive is instantiated.
    //      */
    //     ngOnInit(): void;
    // }
    ngOnInit() {
        console.log('Komponente initialisiert');
        this.intervalId = setInterval(() => {
            this.activeImg === 3 ? this.activeImg = 0 : this.activeImg++;
        }, 2000);
    }
    //   export declare interface OnChanges {
    //     /**
    //      * A callback method that is invoked immediately after the
    //      * default change detector has checked data-bound properties
    //      * if at least one has changed, and before the view and content
    //      * children are checked.
    //      * @param changes The changed properties.
    //      */
    //     ngOnChanges(changes: SimpleChanges): void;
    // } 
    ngOnChanges(changes) {
        console.log('Komponente geändert');
        console.log('changes', changes);
    }
    //   export declare interface OnDestroy {
    //     /**
    //      * A callback method that performs custom clean-up, invoked immediately
    //      * before a directive, pipe, or service instance is destroyed.
    //      */
    //     ngOnDestroy(): void;
    // }
    ngOnDestroy() {
        console.log('Komponente zerstört');
        clearInterval(this.intervalId);
    }
};
__decorate([
    core_1.Input()
], DiashowComponent.prototype, "images", void 0);
DiashowComponent = __decorate([
    core_1.Component({
        selector: 'app-diashow',
        templateUrl: './diashow.component.html',
        styleUrls: ['./diashow.component.css']
    })
], DiashowComponent);
exports.DiashowComponent = DiashowComponent;
