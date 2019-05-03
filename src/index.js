import React from "react";
import ReactDOM from "react-dom";
import FadeIn from "./FadeIn";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>React Spring Tutorial</h1>
      <FadeIn />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
