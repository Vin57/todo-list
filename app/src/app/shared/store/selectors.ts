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
export const todoElementSelector = createSelector(
  todoSelector,
  routerStateSelector,
  (todoState: TodoState, routerState: MyRouterState) =>
    todoState.datas.filter((todo: Todo) => todo.id === routerState.params.id)[0]
);
