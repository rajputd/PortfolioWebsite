import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';



class GForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

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

  handleFormSubmit(e) {
    //prevent form from redirecting to different page
    e.preventDefault();
  }

  render() {

    return (
      <form id="gform">
        <div className="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={this.state.name}
            onChange={this.handleNameChange}
            require
          />
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            require
          />
        </div>
        <div className="form-group">
          <label for="message">Message</label>
          <textarea
            className="form-control"
            name="message"
            value={this.state.message}
            onChange={this.handleMessageChange}
            require
          ></textarea>
        </div>

        <button
          className="btn"
          onClick={this.handleFormSubmit}
          >Submit</button>
      </form>
    );
  }
}

export default GForm;