import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>hihi</h1>
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

//{/* tinder cards */}
//{/* buttons below tinder cards */}

//{/* chats screen */}
//{/* individual chat screen */}
