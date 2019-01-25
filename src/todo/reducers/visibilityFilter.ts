import { SET_VISIBILITY_FILTER } from "todo/constants/ActionTypes";
import { ITodoFilters, SHOW_ALL } from "todo/constants/TodoFilters";

const visibilityFilters = (state: string = SHOW_ALL, action: ITodoFilters) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
export default visibilityFilters;
