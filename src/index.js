import React, { Component } from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";

import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: "One"
    };
  }

  render() {
    return (
      <div className="App">
        <h1>React TO DO</h1>
        <Todo todoList={this.state.todoList} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
