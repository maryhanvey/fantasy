import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login.js';
import Rules from './Rules.js';
import Team from './Team.js';


function App() {
  return (
    <div className="App">
      <body>
      <Router>
      <div>
      <ul className="inApp">
        <li class="header"><a>Leaderboard</a></li>
        <li class="header"><a href="/team">My Team</a></li>
        <li  class="header"><a href="/rules">Rules</a></li>
        <li className="right"><a href="/login">Login</a></li>
      </ul>
      <Route path="/login" component={Login}/>
      <Route path="/rules" component={Rules}/>      
      <Route path="/team" component={Team}/>

      </div>
      </Router>
      </body>

    </div>
  );
}

export default App;
