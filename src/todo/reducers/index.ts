import { combineReducers, Reducer } from "redux";
import todos, { IActionType } from "./todos";
import visibilityFilters from "./visibilityFilter";

export interface IAppState {
  todos: Array<{
    completed: boolean;
    id: number;
    value: string;
  }>;
  visibilityFilters: string;
}

const reducers: Reducer<IAppState> = combineReducers<IAppState>({
  todos,
  visibilityFilters
});
export default reducers;
