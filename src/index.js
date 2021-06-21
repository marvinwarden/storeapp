import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import "./index.css";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import reducer, { initialState } from "./components/reducer";
import { StateProvider } from "./components/StateProvider";


ReactDOM.render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </Router>,
  document.getElementById("root")

);