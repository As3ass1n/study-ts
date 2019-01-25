import React, { ChangeEvent, Component, MouseEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { completeTodo, deleteTodo } from "todo/actions";
import { SHOW_ACTIVE, SHOW_ALL } from "todo/constants/TodoFilters";
import { IAppState } from "todo/reducers";
import TodoItem from "../components/TodoItem";

interface Itodo {
  value: string;
  completed: boolean;
  id: number;
}

interface IStateProps {
  todos: Itodo[];
}

interface IDispatchProps {
  deleteToDo: (id: number) => void;
  handleComplete: (id: number) => void;
}

class TodoList extends Component<IStateProps & IDispatchProps> {
  public render() {
    const { todos } = this.props;
    return (
      <ul className="todo-list">
        {todos.map(todo => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              handleComplete={this.handleComplete(todo.id)}
              deleteTodo={this.deleteTodo(todo.id)}
            />
          );
        })}
      </ul>
    );
  }

  private handleComplete = (id: number) => {
    return () => {
      const { handleComplete } = this.props;
      handleComplete(id);
    };
  };

  private deleteTodo = (index: number) => {
    return (e: MouseEvent) => {
      const { deleteToDo } = this.props;
      deleteToDo(index);
    };
  };
}

const mapStateToProps = (state: IAppState): IStateProps => {
  let todos: Itodo[];
  const { visibilityFilters } = state;
  if (visibilityFilters === SHOW_ALL) {
    todos = [...state.todos];
  } else if (visibilityFilters === SHOW_ACTIVE) {
    todos = state.todos.filter(todo => !todo.completed);
  } else {
    todos = state.todos.filter(todo => todo.completed);
  }
  console.log(todos);
  return { todos };
};

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
  return {
    deleteToDo: id => dispatch(deleteTodo(id)),
    handleComplete: id => dispatch(completeTodo(id))
  };
};

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
