import React from 'react';
import { Line  } from "react-chartjs-2";
import { withStyles } from '@material-ui/core/styles';

import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';

const styles = theme => ({
  "chart-container": {
    height: 320 
  }
});



class ExternalPressure extends React.Component {
  state = {
    lineChartData: {
      labels: ['8:00 AM', '8:05 AM', '8:10 AM', '8:15 AM', '8:20 AM', '8:25 AM', '8:30 AM'],
      datasets: [
        {
        type: "line",
        label: "Filip",
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: "rgba(185, 80, 0, 1)",
        pointBackgroundColor: this.props.theme.palette.secondary.main,
        pointBorderColor: this.props.theme.palette.secondary.main,
        borderWidth: "2",
        lineTension: 0.45,
        data: [1, 5, 4, 6, 10, 33]
        //data array initially empty
        },
        {
          type: "line",
          label: "Yuhan",
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: this.props.theme.palette.primary.main,
          pointBackgroundColor: this.props.theme.palette.secondary.main,
          pointBorderColor: this.props.theme.palette.secondary.main,
          borderWidth: "2",
          lineTension: 0.45,
          data: [2, 0, 3, 1, 2, 33]
          //data array initially empty
          }
      ]
    },
    lineChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: true
      },
      scales: {
        xAxes: [{
          ticks: {
            autoSkip: true,
            maxTicksLimit: 10
          }
        }], 
        yAxes: [
          {
            gridLines: {
              display: true, 
              color: "rgb(0, 0, 0, 0.1)"
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
          <Line data={this.state.lineChartData} options = {this.state.lineChartOptions}/>
        </ResponsiveContainer>
      </div>
    );
  }
}


export default withStyles(styles, { withTheme: true })(ExternalPressure);
