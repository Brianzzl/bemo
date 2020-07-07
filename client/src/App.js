import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./screens/Main";
import Contact from "./screens/Contact";
import Nav from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Nav />
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contacts" component={Contact} />
        </Switch>
      </>
      <Footer />
    </Router>
  );
}

export default App;
