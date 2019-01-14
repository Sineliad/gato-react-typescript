import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Tablero  from "./components/tablero";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Gato React - Typescript</p>
          <Tablero />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
