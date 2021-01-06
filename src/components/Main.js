import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Screen from "./Screens/Screen";

export default function Main() {
  return (
    <div className="main">
      <Screen />
    </div>
  );
}
