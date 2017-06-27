import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Account</h2>
          <ul>
            <li><Link to="/netflix">Netflix</Link></li>
            <li><Link to="/zillow-group">Zillow Group</Link></li>
            <li><Link to="/yahoo">Yahoo</Link></li>
            <li><Link to="/modus-creae">Modus Create</Link></li>
          </ul>

          <Route path="/:id" component={Child} />
        </div>
      </Router>
    );
  }
}

const Child = ({match}) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

export default App;
