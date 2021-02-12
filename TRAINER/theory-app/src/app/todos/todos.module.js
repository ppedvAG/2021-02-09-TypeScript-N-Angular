"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const http_1 = require("@angular/common/http");
const overview_todos_component_1 = require("./overview-todos/overview-todos.component");
const rating_component_1 = require("./rating/rating.component");
const todo_row_component_1 = require("./todo-row/todo-row.component");
const rating2_component_1 = require("./rating2/rating2.component");
const forms_1 = require("@angular/forms");
const app_routing_module_1 = require("../app/app-routing.module");
let TodosModule = class TodosModule {
};
TodosModule = __decorate([
    core_1.NgModule({
        declarations: [
            overview_todos_component_1.OverviewTodosComponent,
            rating_component_1.RatingComponent,
            todo_row_component_1.TodoRowComponent,
            rating2_component_1.Rating2Component
        ],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpClientModule,
            app_routing_module_1.AppRoutingModule
        ],
        exports: [
            overview_todos_component_1.OverviewTodosComponent
        ]
    })
], TodosModule);
exports.TodosModule = TodosModule;
