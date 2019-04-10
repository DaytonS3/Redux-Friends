import React, { Component } from 'react';
import Login from './components/Login';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </div>
    );
  }
}

export default App;
