import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO
} from "todo/constants/ActionTypes";

export interface IActionType {
  type: string;
  value: string;
  id: number;
  filter: string;
}

const todos = (state: any[] = [], action: IActionType) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          completed: false,
          id: action.id,
          value: action.value
        }
      ];
    case DELETE_TODO:
      return state.filter(({ id }) => {
        return action.id !== id;
      });
    case COMPLETE_TODO:
      console.log(state);
      return state.map(todo => {
        return action.id === todo.id
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    default:
      return state;
  }
};

export default todos;
