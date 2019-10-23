import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';

import Vitals from "./scenes/Vitals/Vitals"; 
// import Map from "./scenes/Map/Map"; 
import MapComponent from "./scenes/Map/Map"

//TODO: FOR NAV SIDE BAR: https://reacttraining.com/react-router/web/example/sidebar
class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/vitals' component={Vitals}/>
          <Route exact path='/map' component={MapComponent}/>
        
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
