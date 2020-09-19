import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex_container">
        <div className="container">
          <h1>Your next clue is </h1>
          <img src="/VTclue3.png"></img>
          <h1>All the best...!!!!</h1>
        </div>
      </div>
    );
  }
}

export default App;
