import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

import { WebSocketLink } from 'apollo-link-ws';
import { PubSub } from 'graphql-subscriptions';
import { SubscriptionClient } from "subscriptions-transport-ws";

import firebaseConfig from "../firebase"

// var database = firebaseConfig.database();

// var ref1 = database.ref('pi_data/users/usr1');
// ref1.on('value', data => {
//   console.log(data.val())
//   // handle the data here
// })

// var ref2 = database.ref('pi_data/users/usr2');
// ref2.on('value', data => {
//   console.log(data.val())
//   // handle the data here
// })

// const wsLink = new WebSocketLink({
//   uri: `ws://localhost:9000/`,
//   options: {
//     reconnect: true
//   }
// });

// const GRAPHQL_ENDPOINT = "ws://localhost:9000/graphql";
// const client = new SubscriptionClient(GRAPHQL_ENDPOINT, {
//   reconnect: true
// });

// const link = new WebSocketLink(client);

// const data = [ // y coordinate should be heart rate, x should be time, with multiple lines for the diff ppl
//   { name: 'Mon', Visits: 2200, Orders: 3400 },
//   { name: 'Tue', Visits: 1280, Orders: 2398 },
//   { name: 'Wed', Visits: 5000, Orders: 4300 },
//   { name: 'Thu', Visits: 4780, Orders: 2908 },
//   { name: 'Fri', Visits: 5890, Orders: 4800 },
//   { name: 'Sat', Visits: 4390, Orders: 3800 },
//   { name: 'Sun', Visits: 4490, Orders: 4300 },
// ];

class HearRate extends React.Component {
// const HearRate = () => {

  state = {
    user1_data: null,
    user2_data: null,
    user3_data: null,
    user4_data: null
  }

  componentDidMount() {
    var database = firebaseConfig.database();

    var ref1 = database.ref('pi_data/users/usr1');
    ref1.on('value', data => {
      console.log(data.val())
      // state.state_data = data.val();
      this.setState({
        user1_data: data.val()
      })
    })

    var ref2 = database.ref('pi_data/users/usr2');
    ref2.on('value', data => {
      // console.log(data.val())
      this.setState({
        user2_data: data.val()
      })
    })

    var ref3 = database.ref('pi_data/users/usr3');
    ref3.on('value', data => {
      // console.log(data.val())
      this.setState({
        user3_data: data.val()
      })
    })

    var ref4 = database.ref('pi_data/users/usr4');
    ref4.on('value', data => {
      // console.log(data.val())
      this.setState({
        user4_data: data.val()
      })
    })

    const wsLink = new WebSocketLink({
      uri: `ws://localhost:9000/`,
      options: {
        reconnect: true
      }
    });
  
    const GRAPHQL_ENDPOINT = "ws://localhost:9000/graphql";
    const client = new SubscriptionClient(GRAPHQL_ENDPOINT, {
      reconnect: true
    });
  
    const link = new WebSocketLink(client);
  }

  // test = () => {
  //   return this.state.state_data && [Object.keys(this.state.state_data)].map( (a) => {
  //     console.log(a)
  //     console.log('testingggg')
  //   })
  // }
  
  render() {

    let date_object = {
      chestTemperature: 0,
      externalTemperature: 0,
      heartRate: 0,
      humidity: 0
    }

    let user_1_data = this.state.user1_data ? this.state.user1_data : date_object
    let user_2_data = this.state.user2_data ? this.state.user2_data : date_object
    let user_3_data = this.state.user3_data ? this.state.user3_data : date_object
    let user_4_data = this.state.user4_data ? this.state.user4_data : date_object

    let data = [ // y coordinate should be heart rate, x should be time, with multiple lines for the diff ppl
      { name: user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-7]] ? user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-7]].dateTime : '', User1: user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-7]] ? user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-7]].heartRate : 0, Orders: user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-7]] ? user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-7]].heartRate : 0 },
      { name: user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-6]] ? user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-6]].dateTime : '', User1: user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-6]] ? user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-6]].heartRate : 0, Orders: user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-6]] ? user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-6]].heartRate : 0 },
      { name: user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-5]] ? user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-5]].dateTime : '', User1: user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-5]] ? user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-5]].heartRate : 0, Orders: user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-5]] ? user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-5]].heartRate : 0 },
      { name: user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-4]] ? user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-4]].dateTime : '', User1: user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-4]] ? user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-4]].heartRate : 0, Orders: user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-4]] ? user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-4]].heartRate : 0 },
      { name: user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-3]] ? user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-3]].dateTime : '', User1: user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-3]] ? user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-3]].heartRate : 0, Orders: user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-3]] ? user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-3]].heartRate : 0 },
      { name: user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-2]] ? user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-2]].dateTime : '', User1: user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-2]] ? user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-2]].heartRate : 0, Orders: user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-2]] ? user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-2]].heartRate : 0 },
      { name: user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-1]] ? user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-1]].dateTime : '', User1: user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-1]] ? user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-1]].heartRate : 0, Orders: user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-1]] ? user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-1]].heartRate : 0 },
    ];

    return (
      // 99% per https://github.com/recharts/recharts/issues/172
      
      <ResponsiveContainer width="99%" height={320}>
        <LineChart data={data}>
          {this.state.user1_data && console.log(this.state.user1_data[Object.keys(this.state.user1_data)[0]].dateTime, "test")} 
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="User1" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Orders" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

// function HearRate() {
//   return (
//     // 99% per https://github.com/recharts/recharts/issues/172
//     <ResponsiveContainer width="99%" height={320}>
//       <LineChart data={data}>
//         <XAxis dataKey="name" />
//         <YAxis />
//         <CartesianGrid vertical={false} strokeDasharray="3 3" />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="Visits" stroke="#82ca9d" />
//         <Line type="monotone" dataKey="Orders" stroke="#8884d8" activeDot={{ r: 8 }} />
//       </LineChart>
//     </ResponsiveContainer>
//   );
// } user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-7]] ? user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-7]] : 0

export default HearRate;
