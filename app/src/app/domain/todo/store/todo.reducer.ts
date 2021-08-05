import { Todo } from '../models/todo.model';
import {
  TodosActionType,
  TODO_CREATE,
  TODO_DELETE,
  TODO_FETCH,
  TODO_FETCH_ERROR,
  TODO_FETCH_SUCCESS,
  TODO_TOGGLE,
} from './todo.actions';

// reducer 'Action' data State description
export interface TodoState {
  datas: Todo[];
  loading: boolean;
  loaded: boolean;
  error: any;
}

// Si le state est vide, on l'initialise
const initialState: TodoState = {
  datas: null,
  loading: false,
  loaded: false,
  error: null,
};

// reducer(State, Action): State (Un nouvel objet State)
export function todosReducer(
  state: TodoState = initialState,
  action: TodosActionType
): TodoState {
  switch (action.type) {
    case TODO_FETCH:
      return {
        ...state,
        loading: true,
      };
    case TODO_FETCH_SUCCESS:
      return {
        ...state,
        datas: action.payload,
        loading: false,
        loaded: true,
        error: null,
      };
    case TODO_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload,
      };
    case TODO_CREATE:
      // Les reducer étant des fonctions pures, il faut retourner un nouveau state.
      return {
        ...state,
        datas: [...state.datas, action.payload],
      };
    case TODO_DELETE:
      return {
        ...state,
        datas: state.datas.filter(
          (todo: Todo, index: number) => index !== action.payload
        ),
      };
    case TODO_TOGGLE:
      return {
        ...state,
        datas: state.datas.map((todo: Todo, index: number) =>
          index === action.payload ? { ...todo, done: !todo.done } : { ...todo }
        ),
      };
    default:
      return state;
  }
}
