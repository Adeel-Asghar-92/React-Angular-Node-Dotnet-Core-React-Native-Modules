import { TodoActionTypes } from '../shared/enum/todo-action-types';
import { ActionParent } from '../actions/todo.actions';
import { Todo } from '../models/Todo';

export let initialState: Todo[] = [
  { title: "Todo 1" },
  { title: "Todo 2" },
  { title: "Todo 3" }
]

export function TodoReducer(state = initialState, action: ActionParent) {
  switch (action.type) {
    case TodoActionTypes.Add:
      return [...state, action.payload]

    case TodoActionTypes.Remove:
      return state.filter((item, index) => index !== action.payload);

    default: return state;
  }
}
