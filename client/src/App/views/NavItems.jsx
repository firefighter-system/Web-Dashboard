import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import WaterIcon from '@material-ui/icons/Opacity';
import DashboardIcon from '@material-ui/icons/Dashboard';
import VitalsIcon from '@material-ui/icons/BarChart';
import LocationIcon from '@material-ui/icons/MyLocation';
import ContactIcon from '@material-ui/icons/Call'; 
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsIcon from '@material-ui/icons/Settings'; 


import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import GroupIcon from '@material-ui/icons/GroupWork';

export const primaryNavItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GroupIcon />
      </ListItemIcon>
      <ListItemText primary="Team" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VitalsIcon />
      </ListItemIcon>
      <ListItemText primary="Vitals" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <WaterIcon />
      </ListItemIcon>
      <ListItemText primary="Humidity" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <LocationIcon />
      </ListItemIcon>
      <ListItemText primary="Map" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <ContactIcon />
      </ListItemIcon>
      <ListItemText primary="Contact" />
    </ListItem>
  </div>
);

export const secondaryNavItems = (
  <div>
    <ListSubheader inset>Others</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Past Missions" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </div>
);
