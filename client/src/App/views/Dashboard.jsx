import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { primaryNavItems, secondaryNavItems } from './NavItems';
import SimpleLineChart from './SimpleLineChart'; 

import ExternalTemperature from '../components/ExternalTemperature'; 
import BodyTemperature from '../components/BodyTemperature';
import ExternalPressure from '../components/ExternalPressure';

import { dashboardStyles } from '../../stylesheets'; 

class Dashboard extends React.Component {
  state = {
    open: true,
    loaded: false, 
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} id="dashboard-component">
        <CssBaseline />
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden,
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Firefighting Hazmat Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{primaryNavItems}</List>
          <Divider />
          <List>{secondaryNavItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer}>
            <Grid container spacing={8}>
              <Grid container item xs={12} spacing={24}>
                <Grid item xs={6}>
                  <Typography variant="h6" gutterBottom >
                    Heart Rate
                 </Typography>

                  <Typography component="div" className={classes.chartContainer}>
                    <SimpleLineChart />
                  </Typography>

                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" gutterBottom >
                      Body Temperature
                  </Typography>
                  <Typography component="div" className={classes.chartContainer}>
                    <BodyTemperature />
                  </Typography>
                </Grid>
              </Grid>
          
              <Grid container item xs={12} spacing={24}>
                <Grid item xs={6}>  
                  <Typography variant="h6" gutterBottom >
                    External Pressure
                  </Typography>
                  <Typography component="div" className={classes.chartContainer}>
                    <ExternalPressure />
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" gutterBottom >
                    External Temperature
                  </Typography>

                  <Typography component="div" className={classes.chartContainer}>
                    <ExternalTemperature/>
                  </Typography>
                </Grid>
              </Grid>
          </Grid> 
          </div>
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(dashboardStyles)(Dashboard);
