import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import createStore from "./store/store";
import Layout from "./components/Layout";

const store = createStore(window.REDUX_DATA);
// passed data over window object (layout)

const code = (
  <ReduxProvider store={ store }>
    <Router>
      <Layout />
    </Router>
  </ReduxProvider>
);

const app = document.getElementById("app");
ReactDOM.hydrate(code, app);

// If you call ReactDOM.hydrate() on a node that already has this
// server-rendered markup, React will preserve it and only attach event handlers, allowing
// you to have a very performant first-load experience.
