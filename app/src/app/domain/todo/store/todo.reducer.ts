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

// TodoState spécifie un format dans notre State
export interface TodoState {
  datas: {
    // Id object: Object
    [todoId: string]: Todo;
  };
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
        datas: action.payload.reduce(
          (acc, t: Todo) => {
            acc[t.id] = t;
            return acc;
          },
          // On déconstruit tous l'objet contenu dans state.datas
          { ...state.datas }
        ),
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
      // Ici, nous générons un id à partir du nombre d'éléments.
      // Dans un projet "réél", les données seraient persister en base,
      // et l'id serait obtenu depuis la BDD.
      const lastId = Object.keys(state.datas).length
        ? Object.keys(state.datas).reduce((acc, id: string) => id)
        : '0';
      const uid = (lastId + 1).toString();
      // On retourne comme toujours un nouveau state,
      // et l'on modifie sa propriété datas en lui ajoutant un nouvel élément.
      return {
        ...state,
        datas: { ...state.datas, [uid]: { ...action.payload, id: uid } },
      };
    case TODO_DELETE:
      const dataWithoutDeletedTodo = Object.keys(state.datas).reduce(
        (acc, id: string) => {
          if (id !== action.payload) {
            acc[id] = state.datas[id];
          }
          return acc;
        },
        {}
      );
      return {
        ...state,
        datas: dataWithoutDeletedTodo,
      };
    case TODO_TOGGLE:
      return {
        ...state,
        datas: {
          ...state.datas,
          [action.payload]: {
            ...state.datas[action.payload],
            done: !state.datas[action.payload].done,
          },
        },
      };
    default:
      return state;
  }
}
