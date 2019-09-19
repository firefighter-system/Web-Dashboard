import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

import Vitals from "./scenes/Vitals/Vitals"; 
import Map from "./scenes/Map/Map"; 

//TODO: FOR NAV SIDE BAR: https://reacttraining.com/react-router/web/example/sidebar
class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exacct path='/vitals' component={Vitals}/>
          <Route exacct path='/map' component={Map}/>
        
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
