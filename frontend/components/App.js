import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import axios from "axios";

const URL = "http://localhost:9000/api/todos";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }
  componentDidMount() {
    axios
      .get(URL)
      .then((res) => {
        this.setState({ todos: res.data.data });
      })
      .catch((err) => console.error(err));
  }
  render() {
    return (
      <div>
        <h1>Todos:</h1>
        <TodoList todos={this.state.todos} />
        <Form />
      </div>
    );
  }
}
