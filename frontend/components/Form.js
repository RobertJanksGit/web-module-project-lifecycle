import React from "react";
import axios from "axios";

const URL = "http://localhost:9000/api/todos";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      completed: false,
    };
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          type="text"
          placeholder="type todo"
          value={this.props.state.addedTodos.name}
          onChange={this.props.onChange}
        />
        <input type="submit" />
      </form>
    );
  }
}
