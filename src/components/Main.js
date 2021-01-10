import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomepageCompany from "./Screens/HomepageCompany";
import HomepageResearcher from "./Screens/HomepageResearcher";
import HomepageJobSeeker from "./Screens/HomepageJobSeeker";
import Homepage from "./Screens/Homepage";
import AboutUs from "./Screens/AboutUs";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import Blog from "./Screens/Blog";
import CoffeeCorner from "./Screens/CoffeeCorner";

export default function Main() {
  return (
    <div className="main">
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/company">
          <HomepageCompany />
        </Route>
        <Route path="/researcher">
          <HomepageResearcher />
        </Route>
        <Route path="/jobSeeker">
          <HomepageJobSeeker />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/coffee-corner">
          <CoffeeCorner />
        </Route>
      </Switch>
    </div>
  );
}
