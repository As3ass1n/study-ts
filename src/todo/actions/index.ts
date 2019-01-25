import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  SET_VISIBILITY_FILTER
} from "todo/constants/ActionTypes";

let count: number = 0;

export const addTodo = (text: string) => {
  console.log(text);
  return {
    id: count++,
    type: ADD_TODO,
    value: text
  };
};

export const completeTodo = (id: number) => {
  return {
    id,
    type: COMPLETE_TODO
  };
};

export const deleteTodo = (id: number) => {
  return {
    id,
    type: DELETE_TODO
  };
};

export const setVisibilityFilter = (filter: string) => {
  return {
    filter,
    type: SET_VISIBILITY_FILTER
  };
};
