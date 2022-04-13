import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
// import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Machines from "./components/pages/Machines";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/machines" component={Machines} />
      </Switch>
    </Router>
  );
}

export default App;
