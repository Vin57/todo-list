import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { STORE_ENTRY_ROUTER } from './entries';
import { MyRouterState } from './models/my-router-state.model';

// parent
export const routerSelector =
  createFeatureSelector<RouterReducerState<MyRouterState>>(STORE_ENTRY_ROUTER);
// childs
export const routerStateSelector = createSelector(
  routerSelector,
  (routerState: RouterReducerState<MyRouterState>) => routerState.state
);
