import { Todo } from '../todo.model';
import {
  TodosActionType,
  TODO_CREATE,
  TODO_DELETE,
  TODO_TOGGLE,
} from './todo.actions';

// reducer 'Action' data State description
export interface TodoState {
  datas: Todo[];
}

// Si le state est vide, on lui passe un state initial
// en se basant sur l'interface TodoState
const initialState = {
  datas: [
    {
      message: "manger une pizza à l'ananas",
      done: false,
    },
  ],
};

// reducer(State, Action): State (Un nouvel objet State)
export function todosReducer(
  state: TodoState = initialState,
  action: TodosActionType
): TodoState {
  switch (action.type) {
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
