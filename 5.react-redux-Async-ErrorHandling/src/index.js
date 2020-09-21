import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./Components/App";
import "./index.css";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
const store = configureStore(); // it can be useful to pass initial state into the store here
//if you are server rendering or initializing your Redux store with data from localStorage
render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);

//ReduxProvider is a higher order component. Higher order component(HOC) is advance technique in React
//for reusing component logic. It is a function that takes a component and return a new component.
