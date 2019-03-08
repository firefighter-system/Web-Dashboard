import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import RTChart from 'react-rt-chart';


class HeartRate extends React.Component {
  state = {
    loaded: false,
  };

  componentDidMount() {
    setInterval(() => this.forceUpdate(), 1000);
  } 

  getRandomValue() {
    return Math.floor(Math.random() * 300) + 1; 
  }

  render() {
    var data = {
      date: new Date(),
      Car: this.getRandomValue(),
      Bus: this.getRandomValue()
    };

    return ( 
      <div className="container">
        <RTChart
          fields={['Car','Bus']}
          data={data} />
      </div>
    )}; 
  }


export default HeartRate;
