import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CatchesLayout from './components/CatchesLayout/CatchesLayout.js';
import {Grid, Row} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>FYB</h2>
        </div>
        <Grid>
          <Row>
            <CatchesLayout />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
