import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Team() {
  return (
    <div>
      <body>
      <div>
        <h1>blank's team</h1>
          <table class="rulesList">
          <tr><td class="rule">congrats ur mvp won HOH! you get 5 big ones</td></tr>
          <tr><td class="rule">game changer! your veto winner can shake shit up, 4 for u glen coco</td></tr>
          <tr><td class="rule">on the block bitch, sux to sux, -2 pts</td></tr>
          <tr><td class="rule">phew ur off the block +1</td></tr>
          <tr><td class="rule">BUH BYE -3</td></tr>
          <tr><td class="rule">YOU ARE THE CHAMPION MY FRIEND +10</td></tr>
          <tr><td class="rule">second is the best, congrats on 7pts</td></tr>
          <tr><td class="rule">i hope u loved them bc America did, 5 pts for a fave</td></tr>
          <tr><td class="rule">you got the power and 3 points</td></tr>
        </table>
      </div>
      </body>

    </div>
  );
}

export default Team;
