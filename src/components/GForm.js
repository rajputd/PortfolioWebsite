import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Button, Col } from 'react-bootstrap';



class GForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);

    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handleMessageChange(e) {
    this.setState({message: e.target.value});
  }

  render() {

    return (
      <form horizontal id="gform">
        <FormGroup controlId="name">
          <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col>
          <Col sm={10}>
            <FormControl
              type="text"
              value={this.state.name}
              placeholder="Enter name"
              onChange={this.handleNameChange}
            />
          </Col>

        </FormGroup>

        <FormGroup controlId="email">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl
              type="email"
              value={this.state.email}
              placeholder="Enter Email"
              onChange={this.handleEmailChange}
            />
          </Col>
        </FormGroup>

        <FormGroup controlId="message">
          <Col componentClass={ControlLabel} sm={2}>
            Message
          </Col>
          <Col sm={10}>
            <FormControl
              componentClass="textarea"
              value={this.state.message}
              placeholder="Enter Message"
              onChange={this.handleMessageChange}
            />
          </Col>
        </FormGroup>

        <Col sm={2} smOffset={5}>
          <Button id="submit-btn" ype="submit">Submit</Button>
        </Col>

      </form>
    );
  }
}

export default GForm;