import React, { Component } from "react";
import "./index.less";

interface IState {
  value: string;
  todoList: Array<{ value: string; completed: boolean }>;
  completeList: any[];
  filter: string;
}

const Filters = {
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED"
};

class App extends Component<{}, IState> {
  public state: IState = {
    completeList: [],
    filter: Filters.SHOW_ALL,
    todoList: [{ value: "123", completed: false }],
    value: ""
  };

  public render() {
    const { todoList, value, completeList, filter } = this.state;
    console.log(completeList);
    const visibleTodos = {
      [Filters.SHOW_ALL]: todoList,
      [Filters.SHOW_COMPLETED]: todoList.filter(({ completed }) => completed),
      [Filters.SHOW_ACTIVE]: todoList.filter(({ completed }) => !completed)
    };
    return (
      <div>
        <div>
          <form onSubmit={this.handleTodoAdd}>
            <input onChange={this.handleInput} value={value} />
          </form>
        </div>
        <ul>
          {visibleTodos[filter].map((todo, index) => {
            return (
              <li key={todo.value}>
                <input type="checkbox" checked={todo.completed} onChange={this.handleComplete(index)} />
                <span className={todo.completed ? "text" : ""}>
                  {todo.value}
                </span>
                <button onClick={this.deleteTodo(index)}>删除</button>
              </li>
            );
          })}
        </ul>
        <ul>
          <li>
            <a href="" onClick={this.filterTodo(Filters.SHOW_ALL)}>
              All
            </a>
          </li>
          <li>
            <a href="" onClick={this.filterTodo(Filters.SHOW_ACTIVE)}>
              Active
            </a>
          </li>
          <li>
            <a href="" onClick={this.filterTodo(Filters.SHOW_COMPLETED)}>
              Completed
            </a>
          </li>
        </ul>
      </div>
    );
  }

  private filterTodo = (filterType: string) => {
    return (e:any) => {
      e.preventDefault();
      this.setState({
        filter: filterType
      });
    };
  };

  private handleComplete = (index: number) => {
    return (e: any) => {
      const { todoList } = this.state;
      console.log(e);
      this.setState({
        todoList: todoList.map((todo, i) => {
          if (i === index) {
            return {
              completed: e.target.checked,
              value: todo.value
            };
          }
          return todo;
        })
      });
    };
  };

  private handleTodoAdd = (e: any) => {
    e.preventDefault();
    const { todoList, value } = this.state;
    this.setState({
      todoList: todoList.concat({ value, completed: false }),
      value: ""
    });
  };

  private deleteTodo = (index: number) => {
    return () => {
      const { todoList } = this.state;
      this.setState({
        todoList: todoList.filter((item, i) => index !== i)
      });
    };
  };

  private handleInput = (e: any) => {
    this.setState({
      value: e.target.value
    });
  };
}

export default App;
