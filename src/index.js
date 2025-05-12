import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Counters from "./components/counters";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";

const HelloWold = () => <h1>Hello world from component</h1>;

const element = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
