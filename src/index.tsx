import Panel from "Containers/Panel";
import * as React from "react";
import * as ReactDom from "react-dom";

ReactDom.render(
  <Panel compiler="Typescript" framework="React" />,
  // <div>hello</div>,
  document.getElementById("example"),
);
