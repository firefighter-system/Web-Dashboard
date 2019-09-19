import React from 'react';
import { Line } from "react-chartjs-2";
import { withStyles } from '@material-ui/core/styles';

import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';

const styles = theme => ({
  "chart-container": {
    height: 320 
  }
});

class ExternalTemperature extends React.Component {
  state = {
    lineChartData: {
      labels: [],
      datasets: [{
        type: "line",
        label: "Filip",
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: this.props.theme.palette.primary.main,
        pointBackgroundColor: this.props.theme.palette.secondary.main,
        pointBorderColor: this.props.theme.palette.secondary.main,
        borderWidth: "2",
        lineTension: 0.45,
        data: []
        //data array initially empty
      }]
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
        }]
      }
    }
  };

  componentDidMount() {
    //Handles connecting/ disconnecting the feed and updating the component's state with newly fetched data
    const subscribe = {
      type: "subscribe",
      channels: [{
        name: "ticker",
        product_ids: ["BTC-USD"]
      }]
    };

    this.ws = new WebSocket("wss://ws-feed.gdax.com");

    this.ws.onopen = () => {
      this.ws.send(JSON.stringify(subscribe));
    };

    this.ws.onmessage = e => {
      const value = JSON.parse(e.data);
      if (value.type !== "ticker") {
        return;
      }

      const oldBtcDataSet = this.state.lineChartData.datasets[0];
      const newBtcDataSet = {
        ...oldBtcDataSet
      };
      newBtcDataSet.data.push(value.price);

      const newChartData = {
        ...this.state.lineChartData,
        datasets: [newBtcDataSet],
        labels: this.state.lineChartData.labels.concat(
          new Date().toLocaleTimeString()
        )
      };
      this.setState({
        lineChartData: newChartData
      });
    };
  }

  componentWillUnmount() {
    this.ws.close();
  }

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


export default withStyles(styles, { withTheme: true })(ExternalTemperature);
