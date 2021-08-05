import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { MyRouterState } from './models/my-router-state.model';

// Représentation concrète de notre State
export interface MyState {
  // key: state part interface
  router: RouterReducerState<MyRouterState>;
}

// L'ensemble des reducers constitue la State.
export const reducers: ActionReducerMap<MyState> = {
  // key: reducer()
  router: routerReducer,
};

export function logger(
  reducer: ActionReducer<MyState>
): ActionReducer<MyState> {
  return (state: MyState, action: any) => {
    console.log('[LOGGER] : ', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<MyState>[] = [logger];
