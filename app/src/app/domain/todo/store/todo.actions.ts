import { Action } from '@ngrx/store';
import { Todo } from '../models/todo.model';

export const TODO_CREATE = '[todo] create';
export const TODO_DELETE = '[todo] delete';
export const TODO_TOGGLE = '[todo] toggle';
export const TODO_FETCH = '[todo] fetch';
export const TODO_FETCH_SUCCESS = '[todo] fetch success';
export const TODO_FETCH_ERROR = '[todo] fetch error';

export class TodoCreateAction implements Action {
  readonly type = TODO_CREATE;
  constructor(public payload: Todo) {}
}
export class TodoDeleteAction implements Action {
  readonly type = TODO_DELETE;
  constructor(public payload: string) {}
}
export class TodoToggleAction implements Action {
  readonly type = TODO_TOGGLE;
  constructor(public payload: string) {}
}
export class TodoFetchTodo implements Action {
  readonly type = TODO_FETCH;
}
export class TodoFetchTodoSuccess implements Action {
  readonly type = TODO_FETCH_SUCCESS;
  constructor(public payload: Todo[]) {}
}
export class TodoFetchTodoError implements Action {
  readonly type = TODO_FETCH_ERROR;
  constructor(public payload: any) {}
}

export type TodosActionType =
  | TodoCreateAction
  | TodoDeleteAction
  | TodoToggleAction
  | TodoFetchTodo
  | TodoFetchTodoSuccess
  | TodoFetchTodoError;
