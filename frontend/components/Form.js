import React from "react";
import axios from "axios";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      completed: false,
    };
  }

  onSubmit = (evt) => {
    evt.preventDefault();
  };

  onChange = (evt) => {
    const { value } = evt.target;
    this.setState({
      ...this.state,
      name: value,
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="type todo"
          value={this.state.name}
          onChange={this.onChange}
        />
        <input type="submit" />
      </form>
    );
  }
}
