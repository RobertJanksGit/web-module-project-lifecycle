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
      addedTodos: {
        name: "",
        completed: false,
      },
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

  toggleCompletion = (id) => {
    console.log(id);
    axios
      .patch(`${URL}/${id}`)
      .then((response) => {
        console.log("Todo updated", response.data);
        this.setState((prevState) => ({
          todos: prevState.todos.map((todo) =>
            todo.id === id ? response.data.data : todo
          ),
          addedTodos: { ...prevState.addedTodos },
        }));
      })
      .catch((error) => {
        console.error("There was an error updating the todo!", error);
      });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.addedTodos.name.trim() === "") {
      return;
    }
    axios
      .post(URL, this.state.addedTodos)
      .then((response) => {
        console.log("Todo added", response.data);
        this.setState((prevState) => ({
          todos: [...prevState.todos, response.data.data],
          addedTodos: { name: "", completed: false },
        }));
      })
      .catch((error) => {
        console.error("There was an error adding the todo!", error);
      });
  };

  onChange = (evt) => {
    const { value } = evt.target;
    this.setState({
      ...this.state,
      addedTodos: { name: value, completed: false },
    });
  };

  render() {
    return (
      <div>
        <h2>Todos:</h2>
        <TodoList
          toggleCompletion={this.toggleCompletion}
          todos={this.state.todos}
        />
        <Form
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          state={this.state}
        />
        <button>Hide Completed</button>
      </div>
    );
  }
}
