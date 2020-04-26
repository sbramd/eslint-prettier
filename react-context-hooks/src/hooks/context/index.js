import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Home } from "./pages";
import { About } from "./pages/about";
import UserContextProvider from "./UserContext";

function Context() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="selected">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about/" activeClassName="selected">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
        <UserContextProvider>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
        </UserContextProvider>
      </div>
    </Router>
  );
}

export default Context;
