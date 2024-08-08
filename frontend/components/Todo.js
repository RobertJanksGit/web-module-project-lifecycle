import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        <span
          style={{
            textDecoration: this.props.completed ? "line-through" : "none",
          }}
        >
          {this.props.name}
        </span>
      </li>
    );
  }
}
