import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { toggleCompletion } = this.props;
    return (
      <li>
        <span
          onClick={(evt) => toggleCompletion(this.props.id)}
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
