import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { todoElementSelector } from 'src/app/shared/store/selectors';
import { Todo } from '../../models/todo.model';

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
