import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import "./index.less";
import reducers from "./reducers";

const store = createStore(reducers);

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;
