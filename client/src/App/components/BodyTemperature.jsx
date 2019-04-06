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

var firefighters = ["Franko", "Yuhan", "Filip", "Arsham"];

class BodyTemperature extends React.Component {
  state = {
    dataBar: {
      labels: firefighters,
      datasets: [
        {
          label: firefighters[0],
          data: [33, 0, 0, 0],
          backgroundColor: "rgba(245, 74, 85, 0.5)",
          borderWidth: 1
        },
        {
          label: firefighters[1],
          data: [0, 56, 0, 0],
          backgroundColor: "rgba(90, 173, 246, 0.5)",
          borderWidth: 1
        },
        {
          label: firefighters[2],
          data: [0, 0, 25, 0],
          backgroundColor: "rgba(245, 192, 50, 0.5)",
          borderWidth: 1
        },
        {
          label: firefighters[3],
          data: [0, 0, 0, 39],
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

  // componentDidMount() {
  //   //Handles connecting/ disconnecting the feed and updating the component's state with newly fetched data
  //   const subscribe = {
  //     type: "subscribe",
  //     channels: [{
  //       name: "ticker",
  //       product_ids: ["BTC-USD"]
  //     }]
  //   };

  //   this.ws = new WebSocket("wss://ws-feed.gdax.com");

  //   this.ws.onopen = () => {
  //     this.ws.send(JSON.stringify(subscribe));
  //   };

  //   this.ws.onmessage = e => {
  //     const value = JSON.parse(e.data);
  //     if (value.type !== "ticker") {
  //       return;
  //     }

  //     const oldBtcDataSet = this.state.lineChartData.datasets[0];
  //     const newBtcDataSet = {
  //       ...oldBtcDataSet
  //     };
  //     newBtcDataSet.data.push(value.price);

  //     const newChartData = {
  //       ...this.state.lineChartData,
  //       datasets: [newBtcDataSet],
  //       labels: this.state.lineChartData.labels.concat(
  //         new Date().toLocaleTimeString()
  //       )
  //     };
  //     this.setState({
  //       lineChartData: newChartData
  //     });
  //   };
  // }

  // componentWillUnmount() {
  //   this.ws.close();
  // }

  render() {

    return (
      <div>
        <ResponsiveContainer width="99%" height={320}>
          <Bar data={this.state.dataBar} options = {this.state.barChartOptions}/>
        </ResponsiveContainer>
      </div>
    );
  }
}


export default withStyles(styles, { withTheme: true })(BodyTemperature);
