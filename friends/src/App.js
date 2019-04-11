import React, { Component } from 'react';
import Login from './components/Login';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={()=> <Login {...this.props}/>} />
        <Route path="/home" render={()=> <Home />} />
      </div>
    );
  }
}

export default App;
