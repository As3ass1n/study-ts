import React, { ChangeEvent, Component, MouseEvent } from "react";

interface IProps {
  todo: {
    value: string;
    completed: boolean;
    id: number;
  };
  handleComplete: (e: ChangeEvent) => void;
  deleteTodo: (e?: MouseEvent) => void;
}

class TodoItem extends Component<IProps> {
  public render() {
    const { todo, handleComplete, deleteTodo } = this.props;
    return (
      <li key={todo.value} className={todo.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={handleComplete}
          />
          <label className={todo.completed ? "text" : ""}>{todo.value}</label>
          <button className="destroy" onClick={deleteTodo} />
        </div>
      </li>
    );
  }
}

export default TodoItem;
