import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../routes";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome to React SSR!",
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1>{ this.state.title }</h1>
        <Header />
        <Switch>
          { routes.map(route => <Route key={ route.path } { ...route } />) }
        </Switch>
      </React.Fragment>
    );
  }
}
