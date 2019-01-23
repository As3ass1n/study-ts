import React, { Component, ComponentClass, createRef } from "react";
// import { connect } from "utils/connect";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addTodo } from "todo/actions";

interface IDispatchProps {
  addToDo: (text: string) => void;
}

class Header extends Component<IDispatchProps> {
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
    const { addToDo } = this.props;
    addToDo(this.inputRef.current.value);
    this.inputRef.current.value = "";
  };
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
  return {
    addToDo: (text: string) => dispatch(addTodo(text))
  };
};

export default connect<{}, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Header) ;
