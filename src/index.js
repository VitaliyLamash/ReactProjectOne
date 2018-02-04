import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToDo from "./containers/ToDo";
import Account from "./containers/Account";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";

import { BrowserRouter, Route, Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={history}>
    <div>
      <Header />
      <div className="menuStyle">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ToDo">ToDo</Link>
            </li>
            <li>
              <Link to="/Account">Account</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/ToDo" component={ToDo} />
        <Route path="/Account" component={Account} />
      </div>
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
