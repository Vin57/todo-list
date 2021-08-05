import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  public getTodo(): Observable<Todo[]> {
    return timer(2000).pipe(
      map(() => [
        {
          message: 'work',
          done: false,
        },
      ])
    );
  }
}
