import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "../components/Home";
import Pizza from "..components/Pizza";
export default function App(props) {
  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Lambda Eats</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/Pizza">Order Pizza</Link>
        </div>
      </nav>

      {/* 👉 STEP 4 - Build a Switch with a Route for each of the components imported at the top */}
      <Switch>
        <Route path={"/"}></Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Pizza">
          <Pizza />
        </Route>
      </Switch>
    </div>
  );
}
