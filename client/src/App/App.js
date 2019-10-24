import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import Home from './pages/Home';

import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Home/>
      </Switch>
    );
  }
}

export default App;
