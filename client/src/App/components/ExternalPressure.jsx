import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

import firebaseConfig from "../firebase"

class ExternalPressure extends React.Component {

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
      this.setState({
        user1_data: data.val()
      })
    })

    var ref2 = database.ref('pi_data/users/usr2');
    ref2.on('value', data => {
      this.setState({
        user2_data: data.val()
      })
    })

    var ref3 = database.ref('pi_data/users/usr3');
    ref3.on('value', data => {
      this.setState({
        user3_data: data.val()
      })
    })

    var ref4 = database.ref('pi_data/users/usr4');
    ref4.on('value', data => {
      this.setState({
        user4_data: data.val()
      })
    })
  }
  
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

    let data = [ 
      { name: user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-7]] ? user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-7]].dateTime : '', User1: user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-7]] ? user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-7]].humidity : 0, User2: user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-7]] ? user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-7]].humidity : 0, User3: user_3_data[Object.keys(user_3_data)[Object.keys(user_3_data).length-7]] ? user_3_data[Object.keys(user_3_data)[Object.keys(user_3_data).length-7]].humidity : 0, User4: user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-7]] ? user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-7]].humidity : 0 },
      { name: user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-6]] ? user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-6]].dateTime : '', User1: user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-6]] ? user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-6]].humidity : 0, User2: user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-6]] ? user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-6]].humidity : 0, User3: user_3_data[Object.keys(user_3_data)[Object.keys(user_3_data).length-6]] ? user_3_data[Object.keys(user_3_data)[Object.keys(user_3_data).length-6]].humidity : 0, User4: user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-6]] ? user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-6]].humidity : 0 },
      { name: user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-5]] ? user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-5]].dateTime : '', User1: user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-5]] ? user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-5]].humidity : 0, User2: user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-5]] ? user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-5]].humidity : 0, User3: user_3_data[Object.keys(user_3_data)[Object.keys(user_3_data).length-5]] ? user_3_data[Object.keys(user_3_data)[Object.keys(user_3_data).length-5]].humidity : 0, User4: user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-5]] ? user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-5]].humidity : 0 },
      { name: user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-4]] ? user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-4]].dateTime : '', User1: user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-4]] ? user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-4]].humidity : 0, User2: user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-4]] ? user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-4]].humidity : 0, User3: user_3_data[Object.keys(user_3_data)[Object.keys(user_3_data).length-4]] ? user_3_data[Object.keys(user_3_data)[Object.keys(user_3_data).length-4]].humidity : 0, User4: user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-4]] ? user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-4]].humidity : 0 },
      { name: user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-3]] ? user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-3]].dateTime : '', User1: user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-3]] ? user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-3]].humidity : 0, User2: user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-3]] ? user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-3]].humidity : 0, User3: user_3_data[Object.keys(user_3_data)[Object.keys(user_3_data).length-3]] ? user_3_data[Object.keys(user_3_data)[Object.keys(user_3_data).length-3]].humidity : 0, User4: user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-3]] ? user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-3]].humidity : 0 },
      { name: user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-2]] ? user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-2]].dateTime : '', User1: user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-2]] ? user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-2]].humidity : 0, User2: user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-2]] ? user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-2]].humidity : 0, User3: user_3_data[Object.keys(user_3_data)[Object.keys(user_3_data).length-2]] ? user_3_data[Object.keys(user_3_data)[Object.keys(user_3_data).length-2]].humidity : 0, User4: user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-2]] ? user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-2]].humidity : 0 },
      { name: user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-1]] ? user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-1]].dateTime : '', User1: user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-1]] ? user_1_data[Object.keys(user_1_data)[Object.keys(user_1_data).length-1]].humidity : 0, User2: user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-1]] ? user_2_data[Object.keys(user_2_data)[Object.keys(user_2_data).length-1]].humidity : 0, User3: user_3_data[Object.keys(user_3_data)[Object.keys(user_3_data).length-1]] ? user_3_data[Object.keys(user_3_data)[Object.keys(user_3_data).length-1]].humidity : 0, User4: user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-1]] ? user_4_data[Object.keys(user_4_data)[Object.keys(user_4_data).length-1]].humidity : 0 },
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
          <Line type="monotone" dataKey="User1" stroke="#82ca9d" isAnimationActive={false} />
          <Line type="monotone" dataKey="User2" stroke="#8284d8" isAnimationActive={false} />
          <Line type="monotone" dataKey="User3" stroke="#848445" isAnimationActive={false} />
          <Line type="monotone" dataKey="User4" stroke="#8a1445" isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default ExternalPressure;
