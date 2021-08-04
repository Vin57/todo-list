import { ActionReducerMap } from '@ngrx/store';
import { todosReducer, TodoState } from './todo.reducer';

export const STORE_KEY_TODOS = 'todos';

// Représentation concrète de notre State
export interface MyState {
  // key: value
  todos: TodoState;
}

// L'ensemble des reducers constitue la State.
export const reducers: ActionReducerMap<MyState> = {
  // key: reducer()
  todos: todosReducer,
};
