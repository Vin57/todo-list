import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';
import {
  TodoFetchTodo,
  TodoFetchTodoError,
  TodoFetchTodoSuccess,
  TODO_FETCH,
} from './todo.actions';

@Injectable({
  providedIn: 'root',
})
export class TodoEffects {
  public fetchTodo$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(TODO_FETCH), // Ecoute l'action
      switchMap((fetchTodoAction: TodoFetchTodo) => {
        // Réalise une action asynchrone (requête http...)
        return this.todoService.getTodo();
      }),
      // Dispatch une nouvelle action avec un payload pour notifier un Reducer de la State
      map((todos: Todo[]) => new TodoFetchTodoSuccess(todos)),
      // Dispatch une nouvelle action avec un payload pour notifier un Reducer de la State
      catchError((error: any) => of(new TodoFetchTodoError(error)))
    )
  );
  // Le service Action émet à chaque fois qu'un dispatch est émis depuis le Store
  constructor(private actions$: Actions, private todoService: TodoService) {}
}
