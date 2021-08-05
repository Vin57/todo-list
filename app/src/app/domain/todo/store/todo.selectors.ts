import { createFeatureSelector, createSelector } from '@ngrx/store';
import { STORE_ENTRY_TODOS } from 'src/app/shared/store/entries';
import { MyRouterState } from 'src/app/shared/store/models/my-router-state.model';
import { routerStateSelector } from 'src/app/shared/store/selectors';
import { Todo } from '../models/todo.model';
import { TodoState } from './todo.reducer';

// parent
export const todoSelector = createFeatureSelector<TodoState>(STORE_ENTRY_TODOS);
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
