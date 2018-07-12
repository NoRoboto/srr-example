import express from "express";

import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { Provider as ReduxProvider } from "react-redux";
import Helmet from "react-helmet";

import createStore from "../../client/store/store";
import { initializeSession } from "../../client/actions/initializeSession";

import Layout from "../../client/components/Layout";
import { htmlTemplate } from "../template/htmlTemplate";

const router = express.Router();

// Front-end
module.exports = (app, mountPoint) => {
  router.get("/*", (req, res) => {
    const context = {};
    // context is used for tracking potential redirects while rendering the React DOM. T
    // his needs to be handled with a 3XX response from the server.
    const store = createStore();
    store.dispatch(initializeSession());

    const jsx = (
      <ReduxProvider store={ store }>
        <StaticRouter context={ context } location={ req.url }>
          <Layout />
        </StaticRouter>
      </ReduxProvider>
    );

    const reduxState = store.getState();
    const reactDom = renderToString(jsx, reduxState);
    const helmetData = Helmet.renderStatic();

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(htmlTemplate(reactDom, reduxState, helmetData));
  });

  // Use the router
  app.use(mountPoint, router);
};
