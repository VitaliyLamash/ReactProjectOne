import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';


import "./index.css";
import ToDo from "./containers/ToDo";
import Account from "./containers/Account";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";




ReactDOM.render(
  <Router>
    <div>
      <Header />
      <div className="menuStyle">
        <nav>
          <ul>
            <li> <Link to="/">Home</Link>  </li>
            <li>    <Link to="/ToDo">ToDo</Link>   </li>
            <li>   <Link to="/Account">Account</Link>  </li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/ToDo" component={ToDo} />
        <Route path="/Account" component={Account} />
      </div>
      <Footer />
    </div>
  </Router>,
  document.getElementById("root")
);
