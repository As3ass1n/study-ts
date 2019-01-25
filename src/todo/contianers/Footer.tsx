import React, { Component, MouseEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setVisibilityFilter } from "todo/actions";
import { ITodoFilters } from "todo/constants/TodoFilters";
import { IAppState } from "todo/reducers";

interface IFilters {
  SHOW_ACTIVE: string;
  SHOW_ALL: string;
  SHOW_COMPLETED: string;
}

interface IStateProps {
  filter: string;
}

interface IDispatchProps {
  setFilter: (filter: string) => void;
}

export const Filters: IFilters = {
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED"
};

class Footer extends Component<IStateProps & IDispatchProps> {
  public render() {
    const { filter } = this.props;

    return (
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
              className={filter === Filters.SHOW_COMPLETED ? "selected" : ""}
            >
              Completed
            </a>
          </li>
        </ul>
      </footer>
    );
  }
  protected filterTodo(status: string) {
    return (e: MouseEvent) => {
      e.preventDefault();
      const { setFilter } = this.props;
      setFilter(status);
    };
  }
}

const mapStateToProps = (state: IAppState): IStateProps => {
  return {
    filter: state.visibilityFilters
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
  return {
    setFilter: (filter: string) => {
      return dispatch(setVisibilityFilter(filter));
    }
  };
};

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
