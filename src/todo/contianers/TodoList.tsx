import React, { ChangeEvent, Component, MouseEvent } from "react";
import { connect } from "utils/connect";
import TodoItem from "../components/TodoItem";

interface IProps {
  todos: Array<{ value: string; completed: boolean }>;
}

const mapStateToProps = (state: any) => {
  return { todos: [...state] };
};

@connect(mapStateToProps)
class TodoList extends Component<IProps> {
  public render() {
    const { todos } = this.props;
    return (
      <ul className="todo-list">
        {todos.map((todo, index) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.value}
              handleComplete={this.handleComplete(index)}
              deleteTodo={this.deleteTodo(index)}
            />
          );
        })}
      </ul>
    );
  }

  private handleComplete = (index: number) => {
    return (e: ChangeEvent) => {
      console.log(e);
    };
  };

  private deleteTodo = (index: number) => {
    return (e: MouseEvent) => {
      console.log(e);
    };
  };
}

export default TodoList;
