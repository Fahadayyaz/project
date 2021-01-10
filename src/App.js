import React from "react";
import "./custom.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
      <div></div>
    </Router>
  );
}

export default App;
