import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Error from "./pages/error/Error";
import Login from "./pages/login/Login";
import ScrollToTop from "./components/ScrollToTop";
import { Fragment } from "react";
import AppContext from "./store/AppContext/AppContext";
import AppProvider from "./store/AppContext/AppProvider";
var _ = require("lodash");

export default function App() {
  return (
    <Fragment>
      <Router>
        <AppProvider>
          <ScrollToTop />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/app/dashboard" />}
            />
            <Route
              exact
              path="/app"
              render={() => <Redirect to="/app/dashboard" />}
            />
            <PrivateRoute path="/app" component={Layout} />
            <PublicRoute path="/login" component={Login} />
            <Route component={Error} />
          </Switch>
        </AppProvider>
      </Router>
    </Fragment>
  );
}

function PrivateRoute({ component, ...rest }) {
  const { user } = useContext(AppContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        !_.isEmpty(user) ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
}

function PublicRoute({ component, ...rest }) {
  const { user } = useContext(AppContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        !_.isEmpty(user) ? (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        ) : (
          React.createElement(component, props)
        )
      }
    />
  );
}
