import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';

import {ScoreBoard} from './ScoreBoard/ScoreBoard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" component={ScoreBoard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
