import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  public getTodo(): Observable<Todo[]> {
    return timer(2000).pipe(
      map(() => [
        {
          id: '1',
          message: 'work',
          done: false,
        },
        {
          id: '2',
          message: 'cook',
          done: false,
        },
      ])
    );
  }
}
