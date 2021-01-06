import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomepageCompany from "./Screens/HomepageCompany";

export default function Main() {
  return (
    <div className="main">
      <HomepageCompany />
    </div>
  );
}
