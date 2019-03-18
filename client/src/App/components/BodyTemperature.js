import React, { Component } from 'react';
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { withStyles } from '@material-ui/core/styles';

import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';

const styles = theme => ({
  "chart-container": {
    height: 320
  }
});

class BodyTemperature extends React.Component {
  state = {
    dataBar: {
      labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      datasets: [
        {
          label: "Franko",
          data: [0, 0, 33, 0, 0, 0, 0],
          backgroundColor: "rgba(245, 74, 85, 0.5)",
          borderWidth: 1
        },
        {
          label: "Yuhan",
          data: [56, 0, 0, 0, 0, 0, 0],
          backgroundColor: "rgba(90, 173, 246, 0.5)",
          borderWidth: 1
        },
        {
          label: "Filip",
          data: [0, 25, 0, 0, 0, 0, 0],
          backgroundColor: "rgba(245, 192, 50, 0.5)",
          borderWidth: 1
        },
        {
          label: "Arsham",
          data: [0, 0, 0, 39, 0, 0, 0],
          backgroundColor: "rgba(169, 125, 70, 0.5)",
          borderWidth: 1
        }
      ]
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
            {
              barPercentage: 1,
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              }
            }
          ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  };

  render() {

    return (
      <div>
        <ResponsiveContainer width="99%" height={320}>
          <Line data={this.state.dataBar} options = {this.state.barChartOptions}/>
        </ResponsiveContainer>
      </div>
    );
  }
}


export default withStyles(styles, { withTheme: true })(BodyTemperature);
