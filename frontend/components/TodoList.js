import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <Todo key={todo.id} name={todo.name} completed={todo.completed} />
        ))}
      </ul>
    );
  }
}
