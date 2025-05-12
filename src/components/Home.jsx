import React, { Component } from "react";
import Counters from "./counters";

class Home extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (id) => {
    console.log("Increment is called for id=", id);
    let tempCounters = this.state.counters;
    let counters = tempCounters.map((item) =>
      item.id === id && item.value < 10
        ? { id: item.id, value: item.value + 1 }
        : item
    );
    this.setState({ counters });
  };

  handleDecrement = (id) => {
    console.log("Decrement is called for id=", id);
    let tempCounters = this.state.counters;
    let counters = tempCounters.map((item) =>
      item.id === id && item.value > 0
        ? { id: item.id, value: item.value - 1 }
        : item
    );
    this.setState({ counters });
  };

  handleDelete = (id) => {
    console.log("Delete is clicked");
    const counters = this.state.counters.filter((item) => item.id !== id);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        ></Counters>
      </div>
    );
  }
}

export default Home;
