import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';


import Vitals from "../../scenes/Vitals/Vitals"; 

import { dashboardStyles } from './dashboardStyles'; 

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
        <main className={classes.content}>
          <div className={classes.appBarSpacer}>
            <Vitals></Vitals>
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
