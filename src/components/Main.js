import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomepageCompany from "./Screens/HomepageCompany";
import HomepageJobSeeker from "./Screens/HomepageJobSeeker";
import Homepage from "./Screens/Homepage";

export default function Main() {
  return (
    <div className="main">
      <Switch>
        <Route path="/company">
          <Homepage />
        </Route>
        <Route path="/" exact>
          <HomepageCompany />
        </Route>
        <Route path="/jobSeeker">
          <HomepageJobSeeker />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

function About() {
  return <div>about</div>;
}
