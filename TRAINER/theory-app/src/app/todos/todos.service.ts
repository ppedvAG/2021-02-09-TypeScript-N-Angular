import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  getTodosObservableTS() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/')
      .pipe( // ohne pipe wurde das Array geholt, konnte in das Komponenten-Array aber nicht übernommen werden
        /*
catchError<T, O extends ObservableInput<any>>(selector: (err: any, caught: Observable<T>) => O): OperatorFunction<T, T | ObservedValueOf<O>>
*/
        catchError(this.errorCollback('getting todos', []))
      )
  }

  /* (err: any, caught: Observable<T>) => O */
  errorCollback<T>(operation = 'operation', result: T) {
    return (error: any) => {
      console.log('error', error)
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
      console.log('error.message', error.message)
      /* error.message Http failure response for https://jsonplaceholder.typicode.com/todo/: 404 OK */

      return of(result as T) // of bildet ein Observable aus dem bekommenen Argument
    }

  }
}
