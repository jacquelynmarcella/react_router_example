import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


// Importing page components
import Home from './Home.js';
import Contacts from './Contacts.js';
import Procedures from './Procedures.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/procedures">Procedures</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route exact path="/procedures" component={Procedures} />
          <Route exact path="/contact" component={Contacts} />
        </div>
      </Router>
    );
  }
}

export default App;
