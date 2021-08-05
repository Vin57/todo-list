import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { todoElementSelector } from '../../store/todo.selectors';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss'],
})
export class TodoDetailsComponent implements OnInit {
  public selectedTodo$: Observable<Todo> = this.store.pipe(
    select(todoElementSelector)
  );
  constructor(private store: Store) {}

  ngOnInit(): void {}
}
