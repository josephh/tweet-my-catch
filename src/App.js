import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CatchesLayout from './components/CatchesLayout/CatchesLayout.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="container">
          <CatchesLayout />
        </div>
      </div>
    );
  }
}

export default App;
