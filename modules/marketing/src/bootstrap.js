import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

function mount(el) {
  ReactDOM.render(<App />, el);
}

//development
if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#root");

  if (root) {
    mount(root);
  }
}

// for container stuff
export { mount };
