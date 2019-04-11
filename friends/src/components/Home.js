import React from 'react';
import {connect} from 'react-redux';
import {Friends} from './Action';

class Home extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        
    }

    render() {
      return (
        <div className="Home">
            <h1>Home</h1>
        </div>
      );
    }
  }



export default Home;