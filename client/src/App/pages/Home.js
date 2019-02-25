import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
// import { Dashboard }  from 'material-dashboard-react'; 

class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Project Home</h1>
      {/* Link to List.js */}
      <Link to={'./list'}>
        <button variant="raised">
            My List
        </button>
      </Link>
  
      {/* <Dashboard/> */}

    </div>
    );
  }
}
export default Home;
