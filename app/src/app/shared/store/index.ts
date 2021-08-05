import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { MyRouterState } from './models/my-router-state.model';
import { todosReducer, TodoState } from '../../domain/todo/store/todo.reducer';

export const STORE_KEY_TODOS = 'todos';
export const STORE_KEY_ROUTER = 'router';

// Représentation concrète de notre State
export interface MyState {
  // key: state part interface
  todos: TodoState;
  router: RouterReducerState<MyRouterState>;
}

// L'ensemble des reducers constitue la State.
export const reducers: ActionReducerMap<MyState> = {
  // key: reducer()
  todos: todosReducer,
  router: routerReducer,
};
