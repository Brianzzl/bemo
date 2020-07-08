import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./screens/Main";
import Contact from "./screens/Contact";
import Nav from "./components/Header";
import Footer from "./components/Footer";
// import PrivateRoute from "./util/privateRoute";
// import Dashboard from "./screens/Control";
import setAuthToken from "./util/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <Router>
      <Nav />
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contacts" component={Contact} />
          {/* <PrivateRoute exact path="/control" component={Dashboard} /> */}
        </Switch>
      </>
      <Footer />
    </Router>
  );
}

export default App;
