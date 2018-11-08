import React from "react";
import ReactDOM from "react-dom";

const Todo = props => {
  return (
    <React.Fragment>
      <input value="Enter here" />

      <div>{props.todoList}</div>
    </React.Fragment>
  );
};
export default Todo;
