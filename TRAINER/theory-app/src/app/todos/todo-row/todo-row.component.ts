import { Component, OnInit } from '@angular/core';
import { Todo } from '../itodo';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-row',
  templateUrl: './todo-row.component.html',
  styleUrls: ['./todo-row.component.css']
})
export class TodoRowComponent implements OnInit {

  /* 
  1. eine Tabellenreihe mit 5 Zellen wird im Template diese Komponente dargestellt 
   tr>td*5
   4 Zellen für die Todo-Props, 5.te Zelle für Rating
   2. wenn completed bie Todo true ist, ist title von Todo durchgestrichen
   */
  todos: Todo[] = [
    { id: 1, userId: 1, title: 'fahrrad reparieren', completed: false, rating: 3 },
    { id: 1, userId: 1, title: 'post abholen', completed: true, rating: 5 }
  ]

  mouseOver: boolean = false;

  //#region HTTPCLIENT
  todosFromServer: any;
  constructor(
    private http: HttpClient,
    private ts: TodosService
  ) { }

  ngOnInit(): void {
    this.getTodos();
    console.log('this.todosFromServer', this.todosFromServer)
  }
  getTodosObservable() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/')
    /*     .pipe(
          catchError(console.log('error occured'))
        ) */
  }
  async getTodos() {
    // this.getTodosObservable()
    this.ts.getTodosObservableTS()
      .subscribe(response => {this.todosFromServer = response})
      // .subscribe(response => console.log('response', response))
      // .subscribe(response => console.log('response', response))      
  }
  //#endregion HTTPCLIENT


  toggleMouseOver() {
    if (this.mouseOver === true) {
      this.mouseOver = false
    } else {
      this.mouseOver = true;
    }
  }

  //#region rating2
  handleRatingChanged(stars: number) {
    this.todos[1].rating = stars;
    console.log('this.todos[1].rating', this.todos[1].rating)
  }
  //#endregion rating2




}
