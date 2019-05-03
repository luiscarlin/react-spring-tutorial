import React from "react";
import ReactDOM from "react-dom";
import BasicSpring from "./BasicSpring";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>React Spring</h1>
      <BasicSpring />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
