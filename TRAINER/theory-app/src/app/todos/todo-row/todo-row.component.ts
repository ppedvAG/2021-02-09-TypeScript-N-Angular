import { Component, OnInit } from '@angular/core';
import { Todo } from '../itodo';

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
    {id: 1, userId: 1, title: 'fahrrad reparieren', completed: false, rating: 3},
    {id: 1, userId: 1, title: 'post abholen', completed: true, rating: 5}
  ]
  mouseOver: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

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
