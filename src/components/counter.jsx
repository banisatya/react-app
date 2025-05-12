import React, { Component } from "react";

class Counter extends Component {
  state = {
    quantity: 0,
  };
  constructor() {
    super();
  }

  getClassName = () => {
    let classes = "badge m-2 badge-";
    classes += this.state.quantity === 0 ? "warning" : "primary";
    return classes;
  };

  render() {
    return (
      <tr>
        <th scope="row">
          <button className={this.getClassName()}>{this.props.value}</button>
        </th>
        <td>
          <button
            className="btn btn-secondary btn-sm"
            onClick={this.props.onIncrement}
          >
            +
          </button>
        </td>
        <td>
          <button
            className="btn btn-secondary btn-sm"
            onClick={this.props.onDecrement}
          >
            -
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={this.props.onDelete}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Counter;
