import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';



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
      <form id="gform">
        <FormGroup controlId="name">
          <ControlLabel>Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.name}
            placeholder="Enter name"
            onChange={this.handleNameChange}
          />
        </FormGroup>

        <FormGroup controlId="email">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="email"
            value={this.state.email}
            placeholder="Enter Email"
            onChange={this.handleEmailChange}
          />
        </FormGroup>

        <FormGroup controlId="message">
          <ControlLabel>Message</ControlLabel>
          <FormControl
            componentClass="textarea"
            value={this.state.message}
            placeholder="Enter Message"
            onChange={this.handleMessageChange}
          />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default GForm;