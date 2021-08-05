import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from 'src/app/domain/todo/models/todo.model';
import { TodoState } from 'src/app/domain/todo/store/todo.reducer';
import { STORE_KEY_ROUTER, STORE_KEY_TODOS } from '.';
import { MyRouterState } from './models/my-router-state.model';

// parent
export const routerSelector =
  createFeatureSelector<RouterReducerState<MyRouterState>>(STORE_KEY_ROUTER);
// childs
export const routerStateSelector = createSelector(
  routerSelector,
  (routerState: RouterReducerState<MyRouterState>) => routerState.state
);

// parent
export const todoSelector = createFeatureSelector<TodoState>(STORE_KEY_TODOS);
// childs
export const todoListSelector = createSelector(
  todoSelector,
  (todoState: TodoState) => todoState.datas // All 'datas' in TodoState
);
export const todoListArraySelector = createSelector(
  todoSelector,
  (todoState: TodoState) => {
    if (todoState.datas) {
      return Object.keys(todoState.datas).map((id) => todoState.datas[id]);
    }
    return null;
  }
);
export const todoElementSelector = createSelector(
  todoListSelector,
  routerStateSelector,
  (todos: { [id: string]: Todo }, routerState: MyRouterState) =>
    todos[routerState.params.id] ?? null
);
