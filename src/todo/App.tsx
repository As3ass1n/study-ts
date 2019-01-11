import React, { Component } from "react";
import Header from "./contianers/Header";
import TodoList from "./contianers/TodoList";

class App extends Component {
  public render() {
    const todoList = [{ value: "123", completed: false }];
    return (
      <div>
        <Header />
        <section className="main">
          <TodoList todos={todoList} />
        </section>
        {/* {visibleTodos.SHOW_ACTIVE.length ||
          visibleTodos.SHOW_COMPLETED.length ? (
            <footer className="footer">
              <ul className="filters">
                <li>
                  <a
                    href=""
                    onClick={this.filterTodo(Filters.SHOW_ALL)}
                    className={filter === Filters.SHOW_ALL ? "selected" : ""}
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={this.filterTodo(Filters.SHOW_ACTIVE)}
                    className={filter === Filters.SHOW_ACTIVE ? "selected" : ""}
                  >
                    Active
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={this.filterTodo(Filters.SHOW_COMPLETED)}
                    className={
                      filter === Filters.SHOW_COMPLETED ? "selected" : ""
                    }
                  >
                    Completed
                  </a>
                </li>
              </ul>
            </footer>
          ) : null} */}
      </div>
    );
  }
}

export default App;
