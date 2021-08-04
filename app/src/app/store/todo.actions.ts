import { Action } from '@ngrx/store';
import { Todo } from '../todo.model';

const TODO_CREATE = '[todo] create';
const TODO_DELETE = '[todo] delete';
const TODO_TOGGLE = '[todo] toggle';

class TodoCreateAction implements Action {
  readonly type = TODO_CREATE;
  constructor(public payload: Todo) {}
}
class TodoDeleteAction implements Action {
  readonly type = TODO_DELETE;
  constructor(public payload: number) {}
}
class TodoToggleAction implements Action {
  readonly type = TODO_TOGGLE;
  constructor(public payload: number) {}
}

export { TodoCreateAction, TodoDeleteAction, TodoToggleAction };
export { TODO_CREATE, TODO_DELETE, TODO_TOGGLE };
export type TodosActionType =
  | TodoCreateAction
  | TodoDeleteAction
  | TodoToggleAction;
