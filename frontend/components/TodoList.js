import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const filtered = this.props.todos.filter(
      (todo) => !todo.completed || this.props.showAll
    );
    return (
      <ul>
        {filtered.map((todo) => (
          <Todo
            toggleCompletion={this.props.toggleCompletion}
            key={todo.id}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
          />
        ))}
      </ul>
    );
  }
}
