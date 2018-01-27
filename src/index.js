import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Header } from "./header.js";
import { Footer } from "./footer";
import { Content } from "./content";

const app = (
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
);

ReactDOM.render(app, document.getElementById("app"));
