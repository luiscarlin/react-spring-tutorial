import React from "react";
import ReactDOM from "react-dom";
import FadeIn from "./FadeIn";
import Toggle from "./Toggle";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">React Spring Tutorial</h1>
      <div className="card-container">
        <FadeIn />
        <Toggle />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
