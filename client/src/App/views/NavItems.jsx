import React from 'react';

import { Link } from "react-router-dom";

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import WaterIcon from '@material-ui/icons/Opacity';
import DashboardIcon from '@material-ui/icons/Dashboard';
import VitalsIcon from '@material-ui/icons/BarChart';
import LocationIcon from '@material-ui/icons/MyLocation';
import ContactIcon from '@material-ui/icons/Call';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupIcon from '@material-ui/icons/GroupWork';

import "./NavItems/navItemsStyles"

export const primaryNavItems = (
  <div>
    <Link to="/">
      <ListItem button>
        <ListItemIcon><DashboardIcon /></ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>

    <Link to="/team">
      <ListItem button>
        <ListItemIcon><GroupIcon /></ListItemIcon>
        <ListItemText primary="Team" />
      </ListItem>
    </Link>

    <Link to="/vitals">
      <ListItem button>
        <ListItemIcon><VitalsIcon /></ListItemIcon>
        <ListItemText primary="Vitals" />
      </ListItem>
    </Link>

    <Link to="/humidity">
      <ListItem button>
        <ListItemIcon><WaterIcon /></ListItemIcon>
        <ListItemText primary="Humidity" />
      </ListItem>
    </Link>

    <Link to="/map">
      <ListItem button>
        <ListItemIcon><LocationIcon /></ListItemIcon>
        <ListItemText primary="Map" />
      </ListItem>
    </Link>

    <Link to="/contact">
      <ListItem button>
        <ListItemIcon><ContactIcon /></ListItemIcon>
        <ListItemText primary="Contact" />
      </ListItem>
    </Link>
  </div>

);

export const secondaryNavItems = (
  <div>
    <ListSubheader inset>Others</ListSubheader>

    <Link to="/pastmissions">
      <ListItem button>
        <ListItemIcon><AssignmentIcon /></ListItemIcon>
        <ListItemText primary="Past Missions" />
      </ListItem>
    </Link>


    <Link to="/settings">
      <ListItem button>
        <ListItemIcon><SettingsIcon /></ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </Link>
  </div>
);
