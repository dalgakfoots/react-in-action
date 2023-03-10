import React, { Component } from "react";
import { render } from "react-dom";

const node = document.querySelector("#root");
const root = React.createElement(
  "div",
  {},
  React.createElement(
    "h1",
    {},
    "Hello, world!",
    React.createElement(
      "a",
      { href: "mailto:mark@ifelse.io" },
      React.createElement("h1", {}, "React In Action"),
      React.createElement("em", {}, "... and now it really is!")
    )
  )
);

render(root, node);
