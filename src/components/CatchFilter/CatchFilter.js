import React, { Component } from 'react';
import './CatchFilter.css';
import { Button, Row, Col, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

const FISH_FILTER_ID = 'fishFilter',  LOCATION_FILTER_ID = 'locationFilter',  ANGLER_FILTER_ID = 'anglerFilter';

class CatchesFilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    console.log('change');
    if(event.currentTarget.id === FISH_FILTER_ID) {
      this.setState({fishFilter: event.target.value});
    }
    if(event.currentTarget.id === ANGLER_FILTER_ID) {
      this.setState({anglerFilter: event.target.value});
    }
    if(event.currentTarget.id === LOCATION_FILTER_ID) {
      this.setState({locationFilter: event.target.value});
    }
  };

  handleSubmit(event) {
    console.log(`${event.currentTarget.textContent} clicked.`);
    console.log('fish filter is ' + this.state.fishFilter);
    console.log('location filter is ' + this.state.locationFilter);
    console.log('angler filter is ' + this.state.anglerFilter);
    event.preventDefault();
  };

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  };


  render() {
    return ( // it's not mandatory to wrap JSX in parentheses - react recommend it to avoid pitfalls with automatic semi-colon insertion
      <div>
        <form>
          <FormGroup
            controlId={FISH_FILTER_ID}
            validationState={this.getValidationState()}>
            <Row className="show-grid">
              <Col xs={12}>
                <ControlLabel className="pull-left">Fish</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.fish}
                  placeholder="Enter fish tag(s)"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <HelpBlock className="pull-left">Choose from existing tags or add a new ones</HelpBlock>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup
            controlId={LOCATION_FILTER_ID}
            validationState={this.getValidationState()}>
            <Row className="show-grid">
              <Col xs={12}>
                <ControlLabel className="pull-left">Location</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.location}
                  placeholder="Enter location tag(s)"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <HelpBlock className="pull-left">Choose from existing tags or add a new ones</HelpBlock>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup
            controlId={ANGLER_FILTER_ID}
            validationState={this.getValidationState()}>
            <Row className="show-grid">
              <Col xs={12}>
                <ControlLabel className="pull-left">Angler</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.angler}
                  placeholder="Enter angler tag(s)"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <HelpBlock className="pull-left">Choose from existing tags or add a new ones</HelpBlock>
              </Col>
            </Row>
          </FormGroup>
          <Row className="show-grid">
            <Col xs={12}>
              <Button bsStyle="success" bsSize="large" onClick={this.handleSubmit}>
              Filter
              </Button>
            </Col>
          </Row>
        </form>
      </div>
    );
  };
}

export default CatchesFilterForm;
