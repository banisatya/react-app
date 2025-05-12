import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor() {
    super();
  }

  render() {
    const elem = (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Counter</th>
            <th scope="col">Increment</th>
            <th scope="col">Decrement</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        <tbody>
          {this.props.counters.map((item) => (
            <Counter
              key={item.id}
              value={item.value}
              counter={this.props.counter}
              onIncrement={() => {
                this.props.onIncrement(item.id);
              }}
              onDecrement={() => {
                this.props.onDecrement(item.id);
              }}
              onDelete={() => {
                this.props.onDelete(item.id);
              }}
            />
          ))}
        </tbody>
      </table>
    );
    return elem;
  }
}

export default Counters;
