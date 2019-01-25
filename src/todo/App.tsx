import React, { Component } from "react";
import Footer from "./contianers/Footer";
import Header from "./contianers/Header";
import TodoList from "./contianers/TodoList";

class App extends Component {
  public render() {
    return (
      <div>
        <Header />
        <section className="main">
          <TodoList />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
