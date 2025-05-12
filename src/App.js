import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import React, { Component } from "react";
import NavBar from "./components/Navbar";
import { Route, Redirect } from "react-router-dom";
import Posts from "./components/Posts";
import Product from "./components/Product";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import HookExample from "./components/HookExample";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Route
            path="/products"
            render={(props) => <Product sortBy="newest" {...props}></Product>}
          ></Route>
          <Route exact path="/posts/:year?/:month?" component={Posts}></Route>
          <Route path="/" exact component={Home}></Route>
          <Route path="/not-found" exact component={NotFound}></Route>

          <Route></Route>
        </div>
        <HookExample></HookExample>
      </div>
    );
  }
}

export default App;
