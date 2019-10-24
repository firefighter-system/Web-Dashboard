import React from 'react';

import Dashboard from "../../scenes/Dashboard/Dashboard";
import Team from "../../scenes/Team/Team";
import Humidity from "../../scenes/Humidity/Humidity";
import Vitals from "../../scenes/Vitals/Vitals";
import Map from "../../scenes/Map/Map";
import Contact from "../../scenes/Contact/Contact";
import PastMissions from "../../scenes/PastMissions/PastMissions";
import Settings from "../../scenes/Settings/Settings";

import { Switch, Route } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/team" component={Team} />
        <Route path="/vitals" component={Vitals} />
        <Route path="/humidity" component={Humidity} />
        <Route path="/map" component={Map} />
        <Route path="/contact" component={Contact} />
        <Route path="/pastmissions" component={PastMissions} />
        <Route path="/settings" component={Settings} />
      </Switch>
    );
  }
}

export default (Main);
