"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const core_1 = require("@angular/core");
const operators_1 = require("rxjs/operators");
const rxjs_1 = require("rxjs");
let TodosService = class TodosService {
    constructor(http) {
        this.http = http;
    }
    getTodosObservableTS() {
        return this.http.get('https://jsonplaceholder.typicode.com/todos/')
            .pipe(// ohne pipe wurde das Array geholt, konnte in das Komponenten-Array aber nicht übernommen werden
        /*
catchError<T, O extends ObservableInput<any>>(selector: (err: any, caught: Observable<T>) => O): OperatorFunction<T, T | ObservedValueOf<O>>
*/
        operators_1.catchError(this.errorCollback('getting todos', [])));
    }
    /* (err: any, caught: Observable<T>) => O */
    errorCollback(operation = 'operation', result) {
        return (error) => {
            console.log('error', error);
            /*
            HttpErrorResponse {headers: HttpHeaders, status: 404, statusText: "OK", url: "https://jsonplaceholder.typicode.com/todo/", ok: false, …}
      error: {}
      headers: HttpHeaders {normalizedNames: Map(0), lazyUpdate: null, lazyInit: ƒ}
      message: "Http failure response for https://jsonplaceholder.typicode.com/todo/: 404 OK"
      name: "HttpErrorResponse"
      ok: false
      status: 404
      statusText: "OK"
      url: "https://jsonplaceholder.typicode.com/todo/"
      __proto__: HttpResponseBase
       */
            console.log('error.message', error.message);
            /* error.message Http failure response for https://jsonplaceholder.typicode.com/todo/: 404 OK */
            return rxjs_1.of(result); // of bildet ein Observable aus dem bekommenen Argument
        };
    }
};
TodosService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], TodosService);
exports.TodosService = TodosService;
