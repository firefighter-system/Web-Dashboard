import React from "react";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import SimpleLineChart from '../../views/SimpleLineChart';

import Typography from '@material-ui/core/Typography';

import ExternalTemperature from '../../components/BodyTemperature';
import BodyTemperature from '../../components/BodyTemperature';
import ExternalPressure from '../../components/ExternalPressure';
import { dashboardStyles } from "./dashboardStyles";


class Dashboard extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.dashboardContainer}>
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
                <ExternalTemperature />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(dashboardStyles)(Dashboard); 