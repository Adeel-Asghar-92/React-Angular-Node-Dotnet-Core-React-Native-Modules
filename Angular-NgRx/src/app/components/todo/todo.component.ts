import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { RemoveTodo } from '../../actions/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[];

  constructor(
    private store: Store<{todos: Todo[]}>
  ) {
    store.pipe(select('todos')).subscribe((values: any) => {
      console.log(values)
      this.todos = values;
      console.log("todos: ", this.todos)
    })
  }

  removeTodo(index: number){
    this.store.dispatch(new RemoveTodo(index))
  }

  ngOnInit(): void {
  }

}
