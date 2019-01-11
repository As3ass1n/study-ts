import React, { Component, createRef } from "react";
import { Dispatch } from "redux";
import { addTodo } from "todo/actions";
import { connect } from "utils/connect";

interface IProps {
  dispatch: Dispatch;
}

class Header extends Component<IProps> {
  protected inputRef = createRef<HTMLInputElement>();

  public render() {
    return (
      <div>
        <form onSubmit={this.handleTodoAdd}>
          <input ref={this.inputRef} className="new-todo" />
        </form>
      </div>
    );
  }

  private handleTodoAdd = (e: any) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(addTodo(this.inputRef.current.value));
    this.inputRef.current.value = "";
  };
}

export default connect()(Header);
