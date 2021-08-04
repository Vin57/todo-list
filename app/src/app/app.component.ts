import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyState, STORE_KEY_TODOS } from './store';
import {
  TodoCreateAction,
  TodoDeleteAction,
  TodoToggleAction,
} from './store/todo.actions';
import { TodoState } from './store/todo.reducer';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public todos$: Observable<Todo[]> = this.store.pipe(
    select(STORE_KEY_TODOS),
    map((data: TodoState) => data.datas)
  );
  public message: string;

  constructor(private store: Store<MyState>) {}

  ngOnInit(): void {}

  public addTodo() {
    this.store.dispatch(
      new TodoCreateAction({
        message: this.message,
        done: false,
      })
    );
    this.message = '';
  }

  public toggleTodo(index: number) {
    this.store.dispatch(new TodoToggleAction(index));
  }

  public deleteTodo(index: number) {
    this.store.dispatch(new TodoDeleteAction(index));
  }
}
