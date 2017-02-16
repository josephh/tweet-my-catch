import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CatchFilter from './components/CatchFilter/CatchFilter.js';
import {Grid, Col, Row} from 'react-bootstrap';

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
            <Col xs={12} md={6}>
              <h3>Log a catch</h3>
            </Col>
            <Col xs={12} md={6}>
              <h3>Browse catches</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <p>Log catch form or link here</p>
            </Col>
            <Col xs={12} md={6}>
              <CatchFilter/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
