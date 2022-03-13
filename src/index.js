import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navigation from "./Navigation";
import Hero from "./Hero";
import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Hero />
    <Aboutme />
    <Skills />
    <Portfolio />
    <Contacts />
  </React.StrictMode>,
  document.getElementById("root")
);
