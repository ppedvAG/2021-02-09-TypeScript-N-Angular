"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRowComponent = void 0;
const core_1 = require("@angular/core");
let TodoRowComponent = class TodoRowComponent {
    constructor(http, ts) {
        this.http = http;
        this.ts = ts;
        /*
        1. eine Tabellenreihe mit 5 Zellen wird im Template diese Komponente dargestellt
         tr>td*5
         4 Zellen für die Todo-Props, 5.te Zelle für Rating
         2. wenn completed bie Todo true ist, ist title von Todo durchgestrichen
         */
        this.todos = [
            { id: 1, userId: 1, title: 'fahrrad reparieren', completed: false, rating: 3 },
            { id: 1, userId: 1, title: 'post abholen', completed: true, rating: 5 }
        ];
        this.mouseOver = false;
    }
    ngOnInit() {
        this.getTodos();
        console.log('this.todosFromServer', this.todosFromServer);
    }
    getTodosObservable() {
        return this.http.get('https://jsonplaceholder.typicode.com/todos/');
        /*     .pipe(
              catchError(console.log('error occured'))
            ) */
    }
    getTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            // this.getTodosObservable()
            this.ts.getTodosObservableTS()
                .subscribe(response => { this.todosFromServer = response; });
            // .subscribe(response => console.log('response', response))
            // .subscribe(response => console.log('response', response))      
        });
    }
    //#endregion HTTPCLIENT
    toggleMouseOver() {
        if (this.mouseOver === true) {
            this.mouseOver = false;
        }
        else {
            this.mouseOver = true;
        }
    }
    //#region rating2
    handleRatingChanged(stars) {
        this.todos[1].rating = stars;
        console.log('this.todos[1].rating', this.todos[1].rating);
    }
};
TodoRowComponent = __decorate([
    core_1.Component({
        selector: 'app-todo-row',
        templateUrl: './todo-row.component.html',
        styleUrls: ['./todo-row.component.css']
    })
], TodoRowComponent);
exports.TodoRowComponent = TodoRowComponent;
